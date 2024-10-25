import React from 'react';
import { TeamMember } from './type';

interface CardFrontProps {
  member: TeamMember;
  defaultImage: string;
}

export const CardFront: React.FC<CardFrontProps> = ({ member, defaultImage }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-2xl p-5 backface-hidden">
      <img 
        src={member.image || defaultImage} 
        alt={member.name} 
        className="w-4/5 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" 
      />
      <div className="absolute top-5 left-6 text-4xl font-bold text-[#702412] z-20">
        {member.name.charAt(0)}
      </div>
      <div className="absolute top-12 left-5 text-5xl text-[#702412] z-20 after:content-['\2660']" />
      <div className="absolute bottom-12 text-center z-10">
        <h3 className="text-3xl font-jersey text-[#702412] leading-[1vh]">{member.name}</h3>
        <p className="text-sm text-[#702412]/60 font-rubik mt-2">{member.role}</p>
      </div>
    </div>
  );
};