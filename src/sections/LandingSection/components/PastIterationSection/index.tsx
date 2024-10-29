import IterationDetails from './IterationDetails';
import { City, NepalCity, ClickArea } from '@/components/Assets';

export default function PastIterationSection() {
  const roundObj23 = [
    { title: 'Preliminary', icon: ClickArea },
    { title: 'Escape the Building', icon: City },
    { title: 'AR Hunt', icon: NepalCity }
  ];

  const detailsObj23 = {
    year: '2023',
    title: 'AR Treasure Hunt V2',
    prizePool: '30,000',
    participants: '500+',
    college: '80+',
    roundDetails:
      'AR Treasure Hunt combines the excitement of a traditional treasure hunt with the immersive experience of Augmented Reality. Participants use their smartphones or AR devices to find virtual clues, solve puzzles, and interact with digital objects that are overlaid on real-world locations.'
  };

  const roundObj22 = [
    { title: 'Preliminary', icon: ClickArea },
    { title: 'AR Hunt', icon: NepalCity }
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
      <IterationDetails detailsObj={detailsObj23} roundObj={roundObj23} />
      <IterationDetails detailsObj={detailsObj22} roundObj={roundObj22} />
    </div>
  );
}
