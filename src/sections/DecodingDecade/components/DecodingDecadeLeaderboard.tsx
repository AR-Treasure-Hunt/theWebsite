// components/LeaderBoard.tsx
import { useEffect, useState } from 'react';
import { Trophy, Loader } from 'lucide-react';

interface TeamRanking {
  [key: number]: string;
}

const DecodingDecadeLeaderboard = () => {
  const [teams, setTeams] = useState<TeamRanking>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://factorfive.onrender.com/teams');
        if (!response.ok) {
          throw new Error('Failed to fetch leaderboard');
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        setError('Unable to load leaderboard');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader className="animate-spin h-8 w-8 text-gray-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 max-h-[400px] overflow-y-auto">
      <div className="flex items-center space-x-2 mb-4">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h2 className="text-xl font-semibold text-gray-800">Team Rankings</h2>
      </div>
      
      <div className="space-y-2">
        {Object.entries(teams).map(([rank, team]) => (
          <div 
            key={rank}
            className={`
              flex items-center space-x-3 p-3 rounded-lg
              ${Number(rank) === 1 ? 'bg-yellow-50' : 'bg-gray-50'}
              transition-colors duration-200 hover:bg-gray-100
            `}
          >
            <span 
              className={`
                flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full
                ${Number(rank) === 1 ? 'bg-yellow-500' : 'bg-gray-200'}
                text-white font-semibold
              `}
            >
              {rank}
            </span>
            <span className="text-gray-700 font-rubik font-medium">{team}</span>
          </div>
        ))}
        
        {Object.keys(teams).length === 0 && (
          <p className="text-center font-rubik text-gray-500 py-4">
            No teams have completed the challenge yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default DecodingDecadeLeaderboard;