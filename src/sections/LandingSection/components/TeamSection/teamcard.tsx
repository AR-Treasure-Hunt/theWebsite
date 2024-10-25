import React from 'react';
import { TeamMember } from './type';
import { CardFront } from './cardfront';
import { CardBack } from './cardback';

interface TeamCardProps {
  member: TeamMember;
  defaultImage: string;
  backgroundImage: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, defaultImage, backgroundImage }) => {
  return (
    <div className="w-full max-w-[320px] h-[460px] perspective-[1000px] cursor-pointer p-6">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
        <CardFront member={member} defaultImage={defaultImage} />
        <CardBack member={member} backgroundImage={backgroundImage} />
      </div>
    </div>
  );
};
