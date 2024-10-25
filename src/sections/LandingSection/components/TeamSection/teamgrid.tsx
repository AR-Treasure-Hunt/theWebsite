import React from 'react';
import { TeamMember } from './type';
import { TeamCard } from './teamcard';

interface TeamGridProps {
  teamData: TeamMember[];
  defaultImage: string;
  backgroundImage: string;
}

export const TeamGrid: React.FC<TeamGridProps> = ({ 
  teamData, 
  defaultImage, 
  backgroundImage 
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-around w-full gap-3">
        {teamData.map((member, index) => (
          <TeamCard
            key={index}
            member={member}
            defaultImage={defaultImage}
            backgroundImage={backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};