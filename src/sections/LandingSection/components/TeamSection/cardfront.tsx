import React from 'react';
import { TeamMember } from './type';

function Spade() {
  return(
    <svg width="25" height="26" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.27838 6.55161C9.27838 7.90122 8.11474 8.51946 7.31011 8.51989C6.41281 8.51989 5.73488 8.11348 5.33127 7.78162C5.3845 8.87954 5.64438 9.66392 6.8106 10.2813H3.00098C4.1672 9.66392 4.42708 8.87954 4.48031 7.78162C4.0767 8.11326 3.39856 8.52032 2.50148 8.51989C1.69792 8.51989 0.533203 7.90122 0.533203 6.55161C0.533203 4.08491 2.2709 4.75616 4.90568 0.593567C7.54068 4.75616 9.27838 4.08513 9.27838 6.55161Z" fill="#702412"/>
</svg>
  )
}

interface CardFrontProps {
  member: TeamMember;
  defaultImage: string;
}

export const CardFront: React.FC<CardFrontProps> = ({ member, defaultImage }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-between bg-white rounded-2xl p-5 backface-hidden">
      <div className="flex-grow flex items-center justify-center p-4">
        <img
          src={member.image || defaultImage}
          alt={member.name}
          className="max-w-full h-fit object-cover" // Ensure the image fits within the container
        />
      </div>

      <div className="absolute top-5 left-6 text-4xl font-bold text-[#702412] z-20">
        {member.name.charAt(0)}
      </div>
      <div className="mt-2 absolute top-12 left-5 z-20" >
          <Spade />
      </div>
      <div className="absolute bottom-12 text-center z-10">
        <h3 className="text-3xl font-jersey text-[#702412] lg:leading-[1vh] leading-[2vh] ">
          {member.name}
        </h3>
        <p className="text-sm text-[#702412]/70 font-bold font-rubik mt-2">{member.role}</p>
      </div>
    </div>
  );
};
