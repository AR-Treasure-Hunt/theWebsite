import IterationDetails from "./IterationDetails";
import {
    City,
    NepalCity,
    ClickArea,
} from '@/components/Assets';

export default function PastIterationSection() {
    const roundObj23 = [
        { title: "Preliminary", icon: ClickArea },
        { title: "Escape the Building", icon: City },
        { title: "AR Hunt", icon: NepalCity }
    ]

    const detailsObj23 = {
        year: "2023",
        title: "AR Treasure Hunt V2",
        prizePool: "30,000",
        participants: "500+",
        college: "80+",
        roundDetails: "AR Treasure Hunt combines the excitement of a traditional treasure hunt with the immersive experience of Augmented Reality. Participants use their smartphones or AR devices to find virtual clues, solve puzzles, and interact with digital objects that are overlaid on real-world locations.",
    }

    const roundObj22 = [
        { title: "Preliminary", icon: ClickArea },
        { title: "AR Hunt", icon: NepalCity }
    ]

    const detailsObj22 = {
        year: "2022",
        title: "AR Treasure Hunt V1",
        prizePool: "10,000",
        participants: "100+",
        college: "10+",
        roundDetails: "AR Treasure Hunt combines the excitement of a traditional treasure hunt with the immersive experience of Augmented Reality. Participants use their smartphones or AR devices to find virtual clues, solve puzzles, and interact with digital objects that are overlaid on real-world locations.",
    }

    return (
        <div className="ground-tile-bg">
            <IterationDetails
                detailsObj={detailsObj23}
                roundObj={roundObj23}
            />
            <IterationDetails
                detailsObj={detailsObj22}
                roundObj={roundObj22}
            />
        </div>
    );
}