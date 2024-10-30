import { useState, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon, Loader2, LockIcon } from 'lucide-react';

import { registrationSchema, type RegistrationSchema } from './RegistrationSchema';
import { PersonalDetails } from './PersonalDetails';
import { TeamSection } from './TeamSection';
import { SuccessSection } from './SucessSection';
import clsx from 'clsx';
import { useCreateTeam, useJoinTeam } from '@/api/registration';

const expandCollapse = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      height: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      },
      opacity: { duration: 0.2 }
    }
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 }
    }
  }
};

export default function RegistrationForm() {
  const createTeamMutation = useCreateTeam();
  const joinTeamMutation = useJoinTeam();

  const [step, setStep] = useState(1);
  const [teamCode, setTeamCode] = useState('');
  const [openSections, setOpenSections] = useState<number[]>([1]);
  const [closingSection, setClosingSection] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSection2Submitted, setIsSection2Submitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [teamAction, setTeamAction] = useState<'create' | 'join'>('create');

  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: '',
      address: '',
      email: '',
      phoneNumber: '',
      institution: '',
      socialMedia: '',
      teamOption: 'create',
      teamName: ''
    }
  });

  const handleNextStep = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (step === 1) {
      const isValid = await form.trigger(['fullName', 'address', 'phoneNumber', 'institution']);

      if (!isValid) return;

      setCompletedSteps((prev) => [...prev, 1]);
      setClosingSection(1);
      setTimeout(() => {
        setStep(2);
        setOpenSections([2]);
        setClosingSection(null);
      }, 300);
    }

    if (step === 2) {
      const isValid = await form.trigger(['teamOption', 'teamName']);
      if (!isValid) return;

      setClosingSection(2);
      setTimeout(() => {
        setStep(3);
        setOpenSections([3]);
        setClosingSection(null);
      }, 300);
    }
  };

  const handlePrevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step > 1 && step < 3 && !isSection2Submitted) {
      setClosingSection(step);
      setTimeout(() => {
        setStep(step - 1);
        setOpenSections([step - 1]);
        setClosingSection(null);
      }, 200);
    }
  };

  const onSubmit = async (data: RegistrationSchema) => {
    console.log(data);
    if (step === 2) {
      const isValid = await form.trigger(['teamOption', 'teamName', 'socialMedia']);
      if (!isValid) return;

      setIsLoading(true);
      setTeamAction(data.teamOption);

      try {
        if (data.teamOption === 'create') {
          const res = await createTeamMutation.mutateAsync({
            teamName: data.teamName,
            userData: {
              name: data.fullName,
              email: data.email,
              phone_number: data.phoneNumber,
              institution: data.institution,
              address: data.address,
              social_media: data.socialMedia
            }
          });
          setTeamCode(res.data.teamCode);
        } else {
          const res = await joinTeamMutation.mutateAsync({
            teamCode: data.teamName,
            userData: {
              name: data.fullName,
              email: data.email,
              phone_number: data.phoneNumber,
              institution: data.institution,
              address: data.address,
              social_media: data.socialMedia
            }
          });
          setTeamCode(res.data.teamCode);
        }

        setCompletedSteps((prev) => [...prev, 2]);
        setIsSection2Submitted(true);
        handleNextStep();
      } finally {
        setIsLoading(false);
      }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(teamCode);
  };

  const isStepComplete = (stepNumber: number) => {
    return completedSteps.includes(stepNumber);
  };

  const canAccessSection = (sectionNumber: number) => {
    if (sectionNumber === 1) return true;
    if (sectionNumber === 2) return isStepComplete(1);
    if (sectionNumber === 3) return isStepComplete(2);
    return false;
  };

  const toggleSection = (sectionNumber: number) => {
    if (!canAccessSection(sectionNumber)) return;

    if (isSection2Submitted && sectionNumber < 3) return;

    if (openSections.includes(sectionNumber)) {
      setClosingSection(sectionNumber);
      setTimeout(() => {
        setOpenSections((prev) => prev.filter((s) => s !== sectionNumber));
        setClosingSection(null);
      }, 200);
    } else {
      setOpenSections([sectionNumber]);
      setStep(sectionNumber);
    }
  };

  const getSectionTitle = (sectionNumber: number) => {
    if (sectionNumber === 1) return 'Enter Your Details';
    if (sectionNumber === 2) return 'Create or Join Team';
    return 'Final Step';
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl tracking-wide font-bold">Registration</CardTitle>
          <CardDescription className="text-xl tracking-wide">
            Complete all sections to register
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {[1, 2, 3].map((sectionNumber) => (
                <Collapsible
                  key={sectionNumber}
                  open={openSections.includes(sectionNumber)}
                  onOpenChange={() => toggleSection(sectionNumber)}>
                  <CollapsibleTrigger
                    className={clsx(
                      'flex items-center justify-between w-full p-4 font-medium text-left rounded-lg transition-colors',
                      {
                        'bg-muted hover:bg-muted/80': canAccessSection(sectionNumber),
                        'bg-muted/50 cursor-not-allowed': !canAccessSection(sectionNumber)
                      }
                    )}
                    disabled={
                      !canAccessSection(sectionNumber) || (isSection2Submitted && sectionNumber < 3)
                    }>
                    <span className="text-lg">
                      {sectionNumber}. {getSectionTitle(sectionNumber)}
                    </span>
                    {isStepComplete(sectionNumber) && isSection2Submitted ? (
                      <div className="flex items-center space-x-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </motion.div>
                        <LockIcon className="h-4 w-4" />
                      </div>
                    ) : canAccessSection(sectionNumber) ? (
                      openSections.includes(sectionNumber) ? (
                        <ChevronUpIcon className="h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5" />
                      )
                    ) : (
                      <LockIcon className="h-4 w-4" />
                    )}
                  </CollapsibleTrigger>
                  <AnimatePresence initial={false}>
                    {(openSections.includes(sectionNumber) || closingSection === sectionNumber) && (
                      <CollapsibleContent forceMount asChild>
                        <motion.div
                          variants={expandCollapse}
                          initial="closed"
                          animate={openSections.includes(sectionNumber) ? 'open' : 'closed'}
                          exit="closed">
                          <div className="p-4 space-y-4">
                            {sectionNumber === 1 && (
                              <>
                                <PersonalDetails isDisabled={isSection2Submitted} />
                                {!isSection2Submitted && step === 1 && (
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <Button
                                      type="button"
                                      onClick={handleNextStep}
                                      className="w-full text-lg tracking-wide bg-[#004B6E] hover:bg-[#002a3d]">
                                      Next
                                    </Button>
                                  </motion.div>
                                )}
                              </>
                            )}
                            {sectionNumber === 2 && (
                              <>
                                <TeamSection isDisabled={isSection2Submitted} />
                                {!isSection2Submitted && step === 2 && (
                                  <div className="flex justify-between">
                                    <motion.div
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}>
                                      <Button
                                        type="button"
                                        variant="outline"
                                        className="text-lg tracking-wide"
                                        onClick={handlePrevStep}>
                                        Back
                                      </Button>
                                    </motion.div>
                                    <motion.div
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}>
                                      <Button
                                        className="text-lg tracking-wide bg-[#004B6E] hover:bg-[#002a3d]"
                                        type="submit"
                                        disabled={isLoading}>
                                        {isLoading ? (
                                          <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            {form.getValues('teamOption') === 'create'
                                              ? 'Creating Team...'
                                              : 'Joining Team...'}
                                          </>
                                        ) : form.getValues('teamOption') === 'create' ? (
                                          'Create Team'
                                        ) : (
                                          'Join Team'
                                        )}
                                      </Button>
                                    </motion.div>
                                  </div>
                                )}
                              </>
                            )}
                            {sectionNumber === 3 && isStepComplete(2) && (
                              <SuccessSection
                                teamCode={teamCode}
                                onCopy={copyToClipboard}
                                action={teamAction}
                              />
                            )}
                          </div>
                        </motion.div>
                      </CollapsibleContent>
                    )}
                  </AnimatePresence>
                </Collapsible>
              ))}
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </motion.div>
  );
}
