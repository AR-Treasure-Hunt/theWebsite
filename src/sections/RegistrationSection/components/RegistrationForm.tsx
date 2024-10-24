import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon, LockIcon } from "lucide-react"

import { registrationSchema, type RegistrationSchema } from "./RegistrationSchema"
import { PersonalDetails } from "./PersonalDetails"
import { TeamSection } from "./TeamSection"
import { SuccessSection } from "./SucessSection"
import clsx from "clsx"

const expandCollapse = {
    open: {
        opacity: 1,
        height: "auto",
        transition: {
            height: {
                type: "spring",
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
}

export default function RegistrationForm() {
    const [step, setStep] = useState(1)
    const [teamCode, setTeamCode] = useState("")
    const [openSections, setOpenSections] = useState<number[]>([1])
    const [closingSection, setClosingSection] = useState<number | null>(null)
    const [completedSteps, setCompletedSteps] = useState<number[]>([])

    const form = useForm<RegistrationSchema>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            fullName: "",
            address: "",
            phoneNumber: "",
            institution: "",
            teamOption: "create",
            teamName: "",
        },
    })

    const handleNextStep = async () => {
        if (step === 1) {
            const isValid = await form.trigger([
                "fullName",
                "address",
                "phoneNumber",
                "institution"
            ])

            if (!isValid) return

            setCompletedSteps(prev => [...prev, 1])
        }

        if (step < 3) {
            setClosingSection(step)
            setTimeout(() => {
                setStep(step + 1)
                setOpenSections(prev => [...prev, step + 1])
                setClosingSection(null)
            }, 300)
        }
    }

    const handlePrevStep = () => {
        if (step > 1 && step < 3 && !completedSteps.includes(2)) {
            setClosingSection(step)
            setTimeout(() => {
                setStep(step - 1)
                setOpenSections(prev => prev.filter(s => s !== step))
                setClosingSection(null)
            }, 300)
        }
    }

    const onSubmit = async (data: RegistrationSchema) => {
        console.log(data);
        if (step === 2) {
            const isValid = await form.trigger(["teamOption", "teamName"])
            if (!isValid) return

            const newTeamCode = "TEAM" + Math.random().toString(36).substr(2, 6).toUpperCase()
            setTeamCode(newTeamCode)
            setCompletedSteps(prev => [...prev, 2])
            handleNextStep()
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(teamCode)
    }

    const isStepComplete = (stepNumber: number) => {
        return completedSteps.includes(stepNumber)
    }

    const canAccessSection = (sectionNumber: number) => {
        if (sectionNumber === 1) return true
        if (sectionNumber === 2) return isStepComplete(1)
        if (sectionNumber === 3) return isStepComplete(2)
        return false
    }

    const toggleSection = (sectionNumber: number) => {
        if (!canAccessSection(sectionNumber)) return

        if (openSections.includes(sectionNumber)) {
            if (!isStepComplete(sectionNumber)) {
                setClosingSection(sectionNumber)
                setTimeout(() => {
                    setOpenSections(prev => prev.filter(s => s !== sectionNumber))
                    setClosingSection(null)
                }, 300)
            }
        } else {
            setOpenSections(prev => [...prev, sectionNumber])
        }
    }

    return (
        <motion.div
            className="container mx-auto py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-4xl tracking-wide font-bold">Registration</CardTitle>
                    <CardDescription className="text-xl tracking-wide">Complete all sections to register</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {[1, 2, 3].map((sectionNumber) => (
                                <Collapsible
                                    key={sectionNumber}
                                    open={openSections.includes(sectionNumber)}
                                    onOpenChange={() => toggleSection(sectionNumber)}
                                >
                                    <CollapsibleTrigger
                                        className={clsx("flex items-center justify-between w-full p-4 font-medium text-left rounded-lg transition-colors", {
                                            "bg-muted hover:bg-muted/80": canAccessSection(sectionNumber),
                                            "bg-muted/50 cursor-not-allowed": !canAccessSection(sectionNumber)
                                        })}
                                        disabled={!canAccessSection(sectionNumber)}
                                    >
                                        <span className="text-lg">
                                            {sectionNumber}. {
                                                sectionNumber === 1 ? "Enter Your Details" :
                                                    sectionNumber === 2 ? "Create or Join Team" :
                                                        "Team Creation Successful"
                                            }
                                        </span>
                                        {isStepComplete(sectionNumber) ? (
                                            <div className="flex items-center space-x-2">
                                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                                </motion.div>
                                                <LockIcon className="h-4 w-4" />
                                            </div>
                                        ) : (
                                            canAccessSection(sectionNumber) ? (
                                                openSections.includes(sectionNumber) ?
                                                    <ChevronUpIcon className="h-5 w-5" /> :
                                                    <ChevronDownIcon className="h-5 w-5" />
                                            ) : (
                                                <LockIcon className="h-4 w-4" />
                                            )
                                        )}
                                    </CollapsibleTrigger>
                                    <AnimatePresence initial={false}>
                                        {(openSections.includes(sectionNumber) || closingSection === sectionNumber) && (
                                            <CollapsibleContent forceMount asChild>
                                                <motion.div
                                                    variants={expandCollapse}
                                                    initial="closed"
                                                    animate={openSections.includes(sectionNumber) ? "open" : "closed"}
                                                    exit="closed"
                                                >
                                                    <div className="p-4 space-y-4">
                                                        {sectionNumber === 1 && (
                                                            <>
                                                                <PersonalDetails isDisabled={isStepComplete(1)} />
                                                                {!isStepComplete(1) && step === 1 && (
                                                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                                        <Button onClick={handleNextStep} className="w-full text-lg tracking-wide bg-[#004B6E] hover:bg-[#002a3d]">
                                                                            Next
                                                                        </Button>
                                                                    </motion.div>
                                                                )}
                                                            </>
                                                        )}
                                                        {sectionNumber === 2 && (
                                                            <>
                                                                <TeamSection isDisabled={isStepComplete(2)} />
                                                                {!isStepComplete(2) && step === 2 && (
                                                                    <div className="flex justify-between">
                                                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                                            <Button variant="outline" className="text-lg tracking-wide" onClick={handlePrevStep}>
                                                                                Back
                                                                            </Button>
                                                                        </motion.div>
                                                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                                            <Button className="text-lg tracking-wide bg-[#004B6E] hover:bg-[#002a3d]" type="submit">
                                                                                {form.getValues("teamOption") === "create" ?
                                                                                    "Create Team" :
                                                                                    "Join Team"
                                                                                }
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
                    </Form>
                </CardContent>
            </Card>
        </motion.div>
    )
}