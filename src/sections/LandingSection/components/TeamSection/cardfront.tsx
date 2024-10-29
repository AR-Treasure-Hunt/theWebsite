import React from 'react';
import { TeamMember } from './type';

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
      <div className="absolute top-12 left-5 text-5xl text-[#702412] after:content-['\2660']" />
      <div className="absolute bottom-12 text-center z-10">
        <h3 className="text-3xl font-jersey text-[#702412] lg:leading-[1vh] leading-[2vh] ">{member.name}</h3>
        <p className="text-sm text-[#702412]/60 font-rubik mt-2">{member.role}</p>
      </div>
    </div>
  );
};
