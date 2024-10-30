import React, { useState } from 'react';
import { useSubmitTeamName } from '@/api/DecodingDecadeQuery'; // Import your custom hook

interface DecodingDecadeSecondScreenProps {
  handleScreenChange: (screen: number) => void;
  handleApiResponse: (success: boolean, message: string) => void;
}

const DecodingDecadeSecondScreen = (props: DecodingDecadeSecondScreenProps) => {
  // Props goes here
  const { handleScreenChange, handleApiResponse } = props;

  // State goes here
  const [teamName, setTeamName] = useState('');

  // Query goes here
  const submitTeamName = useSubmitTeamName();

  // Handlers goes here
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    submitTeamName.mutate(teamName, {
      onSuccess: (data) => {
        handleApiResponse(data.success, data.message);
        handleScreenChange(2);
      },
      onError: (error) => {
        handleApiResponse(
          false,
          error.message || 'An error occurred while submitting your team name.'
        );
      }
    });
  };

  return (
    <>
      <p className="text-center text-[28px] text-lime-500 mb-[12px]">
        Congratulations! You've solved the clue!
      </p>
      <p className="text-left text-[28px] text-gray-600 mb-[6px]">
        Enter your team name so we can generate you an image to flex on Instagram:
      </p>
      <form method="post" onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter your team name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="text-[28px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <button
          type="submit"
          disabled={submitTeamName.isPending} // Assuming isPending is the correct property
          className="text-[18px] bg-[#004B6E] text-white py-2 rounded-md font-medium hover:opacity-50 transition-colors disabled:opacity-50">
          {submitTeamName.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default DecodingDecadeSecondScreen;
