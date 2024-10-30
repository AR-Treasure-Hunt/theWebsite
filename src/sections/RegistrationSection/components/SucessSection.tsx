import { Button } from '@/components/ui/button';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

interface SuccessSectionProps {
  teamCode: string;
  onCopy: () => void;
  action: 'create' | 'join';
}

export function SuccessSection({ teamCode, onCopy, action }: SuccessSectionProps) {
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const handleCopy = () => {
    onCopy();
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 5000);
  };

  return (
    <div className="space-y-4">
      <p>{action === 'create' ? 'Team Created Successfully!' : 'Team Joined Successfully!'}</p>
      <p>
        Your team code is: <strong className="text-xl tracking-wide">{teamCode}</strong>
      </p>
      <p>
        {action === 'create'
          ? 'Please remember this code and share it only with your team members.'
          : 'You have successfully joined the team. Welcome aboard!'}
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={handleCopy}
          className={clsx('w-full text-lg tracking-wide transition-colors', {
            'bg-green-600 hover:bg-green-700': showCopySuccess,
            'bg-[#004B6E] hover:bg-[#002a3d]': !showCopySuccess
          })}>
          {showCopySuccess ? (
            <>
              <CheckIcon className="mr-2 h-4 w-4" />
              Code Copied Successfully
            </>
          ) : (
            <>
              <CopyIcon className="mr-2 h-4 w-4" />
              Copy Code
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
