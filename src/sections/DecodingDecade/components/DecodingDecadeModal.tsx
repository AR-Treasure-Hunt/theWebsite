import { ReactNode } from '@tanstack/react-router';

const DecodingDecadeModal = (props: { children: ReactNode }) => {
  // Props goes here
  const { children } = props;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 min-w-[400px] max-w-[600px] shadow-lg rounded-lg p-8  max-w-full">
      <h1 className="text-[40px] font-semibold text-center text-gray-800 mb-[24px]">
        Decoding Decade
      </h1>
      {children}
    </div>
  );
};

export default DecodingDecadeModal;
