import React, { useState } from 'react';
import SadMode from './SadMode';  // Import the SadMode component

interface DecodingDecadeFirstScreenProps {
  handleScreenChange: (page: number) => void;
}

interface ApiResponse {
  message: string;
}

const DecodingDecadeFirstScreen = ({ handleScreenChange }: DecodingDecadeFirstScreenProps) => {
  // State
  const [answer, setAnswer] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);

  // API base URL
  const API_BASE_URL = 'https://factorfive.vercel.app';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error state
    setError(null);
    
    // Validate input
    if (!answer.trim()) {
      setError('Please enter an answer');
      return;
    }

    setIsPending(true);
    setAttempts(prev => prev + 1);

    try {
      const response = await fetch(
        `${API_BASE_URL}/answer?answer=${encodeURIComponent(answer.trim())}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      if (!response.ok) {
        // Handle rate limiting
        if (response.status === 429) {
          throw new Error('Too many attempts. Please wait a minute and try again.');
        }
        throw new Error(`Server error: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      
      if (data.message === 'Correct Answer') {
        handleScreenChange(1);
      } else {
        setError('Incorrect answer. Please try again.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <p className="text-left text-[28px] text-gray-600 mb-[6px]">
        So, have you solved the clue?
      </p>
      
      <form 
        method="post" 
        onSubmit={handleSubmit} 
        className="flex flex-col space-y-4"
        noValidate
      >
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Enter your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={isPending}
            className={`
              text-[28px] px-4 py-2 border rounded-md w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500
              disabled:opacity-50 disabled:cursor-not-allowed
              ${error ? 'border-red-500' : 'border-gray-300'}
            `}
          />
          
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          {attempts > 0 && !error && !isPending && (
            <p className="text-gray-500 text-sm">
              Attempts made: {attempts}
            </p>
          )}
        </div>

        <SadMode options={{ burstCount: 20 }}> {/* Add SadMode here with the options */}
          <button
            type="submit"
            disabled={isPending || !answer.trim()}
            className={`
              text-[18px] bg-[#004B6E] text-white py-2 rounded-md font-medium
              transition-all duration-200
              ${isPending || !answer.trim() 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#003855] active:transform active:scale-95'}`}
          >
            {isPending ? (
              <span className="flex items-center justify-center">
                <svg 
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Answer'
            )}
          </button>
        </SadMode>
      </form>
    </div>
  );
};

export default DecodingDecadeFirstScreen;
