import IterationDetails from './IterationDetails';
import { City, NepalCity, ClickArea } from '@/components/Assets';

export default function PastIterationSection() {
  const roundObj23 = [
    { title: 'Preliminary', icon: ClickArea, description: 'In the first round, participants had to solve puzzles and riddles on the event website. These ranged from easy tasks like finding a hidden treasure location to more complex challenges.' },
    { title: 'Escape the Building', icon: City , description: 'The second round was all about escaping from a mysterious virtual building. Participants had to solve puzzles and explore the rooms to find a way out.' },
    { title: 'AR Hunt', icon: NepalCity , description: 'The final round was a physical challenge using an AR app. Only the top 5 teams from the earlier rounds got to compete in this exciting final stage.' }
  ];

  const detailsObj23 = {
    year: '2023',
    title: 'AR Treasure Hunt V2',
    prizePool: '30,000',
    participants: '500+',
    college: '80+',
    roundDetails:
      'The AR Treasure Hunt 2023 is Nepal\'s largest and most innovative event, combining Augmented Reality technology with an exciting treasure hunt experience. Across multiple rounds, 223 individuals representing 91 teams tackle online riddles, solve immersive virtual puzzles, and compete in a final physical challenge using the event\'s AR app. This unique opportunity allows participants to discover digital treasures and explore new dimensions of engagement in a dynamic, augmented environment.'
  };

  const roundObj22 = [
    { title: 'Preliminary', icon: ClickArea, description: 'The initial online phase of the AR Treasure Hunt 2023 event, where participants had to solve a series of increasingly challenging clues hosted on the event\'s Discord server, with the top-performing teams moving on to the next round of the competition.' },
    { title: 'AR Hunt', icon: NepalCity , description: 'The top 6 teams were then invited to the Kathmandu University premises for the physical treasure hunt, where they had to decipher clues provided by the AR app and safely acquire the treasures.' }
  ];

  const detailsObj22 = {
    year: '2022',
    title: 'AR Treasure Hunt V1',
    prizePool: '10,000',
    participants: '100+',
    college: '10+',
    roundDetails:
      'The online phase had an overwhelming amount of very enthusiastic participants and went very smoothly. Out of 78 registered teams, the top 6 were invited to the Kathmandu University premises to play the Treasure Hunt and win our 10k prize pool and other exciting gifts from our gift partners. Each team was expected to decipher the clues given to them by our AR treasure hunt app, and then safely acquire the treasure from each of the locations. The physical phase of the event proved to be a little more challenging than the online phase as the app was not effectively reading the correct locations of the players. This caused teams to face unnecessary delay when advancing from one clue to the next one. Besides that this phase too was a grand success and received tons of positive feedback from all participants.'
  };
    return (
        <div className="ground-tile-bg">
            <IterationDetails
                year="2023"
                detailsObj={detailsObj23}
                roundObj={roundObj23}
            />
            <IterationDetails
                year="2022"
                detailsObj={detailsObj22}
                roundObj={roundObj22}
            />
        </div>
    );
}

