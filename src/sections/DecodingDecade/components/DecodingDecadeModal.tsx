import React, { ReactNode } from 'react';

import DecodingDecadeLeaderboard from './DecodingDecadeLeaderboard';

const DecodingDecadeModal = (props: { children: ReactNode }) => {
  const { children } = props;



  return (
    <div className="flex justify-center items-center min-h-screen gap-8 p-4">
      <div className="bg-white border border-gray-300 min-w-[400px] max-w-[600px] shadow-lg rounded-lg p-8">
        <h1 className="text-[40px] font-semibold text-center text-gray-800 mb-[24px]">
          Decoding Decade
        </h1>
        {children}
      </div>
      
      <div className="bg-white border border-gray-300 min-w-[400px] max-w-[600px] shadow-lg rounded-lg p-8">
        <DecodingDecadeLeaderboard />
      </div>
    </div>
  );
};

export default DecodingDecadeModal;
