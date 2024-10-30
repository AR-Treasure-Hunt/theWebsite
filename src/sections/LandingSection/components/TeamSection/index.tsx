import React from 'react';
import { TeamGrid } from './teamgrid';
import { teamData } from './teamData';
import defaultImage from './Images/default.webp';
import backgroundImage from './background.png';

const Team: React.FC = () => {
  return (
    <div className="w-full">
      <h1 className="text-5xl font-jersey text-white text-center w-full max-w-[1200px] mx-auto mb-8">
        Meet the team
      </h1>
      <TeamGrid teamData={teamData} defaultImage={defaultImage} backgroundImage={backgroundImage} />
    </div>
  );
};

export default Team;
