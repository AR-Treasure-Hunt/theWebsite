'use client'

import React, { useState } from 'react'
import { useSubmitAnswer } from '@/api/DecodingDecadeQuery'

interface DecodingDecadeFirstScreenProps {
    handleApiResponse: (success: boolean, message: string)=>void;
    handleScreenChange: (page: number)=>void;
}

const DecodingDecadeFirstScreen = (props: DecodingDecadeFirstScreenProps) => {
  // Props goes here
  const {handleApiResponse, handleScreenChange} = props;

  // State goes here
  const [answer, setAnswer] = useState('')

  // Query goes here
  const submitAnswer = useSubmitAnswer()

  // Handlers goes here
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    submitAnswer.mutate(answer, {
      onSuccess: (data) => {
        handleApiResponse(data.success, data.message)
        handleScreenChange(1)
      },
      onError: (error) => {
        handleApiResponse(false, error.message || 'An error occurred while submitting your answer.')
      }
    })
  }

  return (
    <>
      <p className="text-left text-[28px] text-gray-600 mb-[6px]">So, have you solved the clue?</p>
      <form method='post' onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="text-[28px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <button
          type="submit"
          disabled={submitAnswer.isPending}
          className="text-[18px] bg-[#004B6E] text-white py-2 rounded-md font-medium hover:opacity-50 transition-colors disabled:opacity-50"
        >
          {submitAnswer.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </>
  )
}

export default DecodingDecadeFirstScreen