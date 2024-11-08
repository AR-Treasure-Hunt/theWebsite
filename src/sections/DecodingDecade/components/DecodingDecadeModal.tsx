import React, { ReactNode } from 'react';
import DecodingDecadeLeaderboard from './DecodingDecadeLeaderboard';

interface DecodingDecadeModalProps {
  children: ReactNode;
}

const DecodingDecadeModal: React.FC<DecodingDecadeModalProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen gap-8 p-4 bg-gray-100">
      <div className="flex flex-col items-center bg-white border border-gray-300 shadow-lg rounded-lg p-8 min-w-[400px] max-w-[600px]">
        <h1 className="text-[40px] font-semibold text-center text-gray-800 mb-6">
          Factor Five
        </h1>
        <div className="w-full">{children}</div>
      </div>

      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-8 min-w-[400px] max-w-[600px]">
        <DecodingDecadeLeaderboard />
      </div>
    </div>
  );
};

export default DecodingDecadeModal;
