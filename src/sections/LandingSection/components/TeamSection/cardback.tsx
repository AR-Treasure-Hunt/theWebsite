import React from 'react';
import { TeamMember } from './type';
import { SocialLinks } from './social_links';

interface CardBackProps {
  member: TeamMember;
  backgroundImage: string;
}

export const CardBack: React.FC<CardBackProps> = ({ member, backgroundImage }) => {
  return (
    <div className="absolute inset-0 bg-white rounded-2xl p-5 transform rotate-y-180 backface-hidden border-2 border-gray-300 overflow-hidden z-10">
      <div className="relative w-full h-full bg-white rounded-2xl z-20">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
        />
        <div className="relative z-30 p-4 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-jersey text-white">{member.name}</h2>
            <h4 className="text-sm font-rubik text-white/80">{member.role}</h4>
            <div className="flex items-center h-full">
              <p className="text-xl text-[#FBD9BE] my-auto w-9/10 flex items-center justify-center h-full">
                {member.quote}
              </p>
            </div>
          </div>
          <SocialLinks socialLinks={member.socialLinks} />
        </div>
      </div>
    </div>
  );
};
