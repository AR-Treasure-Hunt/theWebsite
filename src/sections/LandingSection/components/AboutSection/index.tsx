import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, TreasureOpen } from '@/components/Assets';

export default function AboutSection() {
    return (
        <div className="bg-orange-900 p-4 md:p-8 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Wait, What is <span className="text-yellow-400">AR Treasure Hunt?</span>
            </h1>
            <p className="mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                To understand AR Treasure Hunt, let us first understand the basics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-[#702412] border-none">
                    <CardHeader>
                        <CardTitle className="flex flex-col items-center">
                            <div className='relative mb-4 w-full max-w-[150px] md:max-w-[200px]'>
                                <img src={Heart} alt="Heart icon" className='w-full h-auto' />
                            </div>
                            <span className="text-[#B1FCFA] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">What Exactly Is Augmented Reality (AR)?</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-base sm:text-lg md:text-xl text-white">
                        Augmented Reality (AR) is a technology that creates an interactive experience where virtual objects are seen in the real world. Imagine looking through your phone and seeing digital objects or information layered on top of what you see in real life.
                    </CardContent>
                </Card>
                <Card className="bg-[#702412] border-none">
                    <CardHeader>
                        <div className='relative mb-4 w-full max-w-[200px] md:max-w-[300px] mx-auto'>
                            <img src={TreasureOpen} alt="Treasure chest" className='w-full h-auto' />
                        </div>
                        <CardTitle className="flex items-center justify-center">
                            <span className="text-[#B1FCFA] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Okay, then what is a Treasure Hunt?</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-base sm:text-lg md:text-xl text-white">
                        A treasure hunt is a game where participants search for clues, often solving puzzles to find the final prize. Traditionally, it involves moving from one location to another, solving clues, and working as a team to uncover the treasure.
                    </CardContent>
                </Card>
            </div>
            <Card className="bg-[#702412] border-none mt-4">
                <CardHeader>
                    <CardTitle>
                        <span className="text-[#B1FCFA] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            So, AR Treasure Hunt?
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-base sm:text-lg md:text-xl text-white">
                    AR Treasure Hunt combines the excitement of a traditional treasure hunt with the immersive experience of Augmented Reality. Participants use their smartphones or AR devices to find virtual clues, solve puzzles, and interact with digital objects that are overlaid on real-world locations. Instead of just following physical clues, participants engage with AR elements that are seamlessly integrated into their environment. This makes the hunt more dynamic, engaging, and challenging, as players navigate both the real world and a digital layer of clues and puzzles.
                </CardContent>
            </Card>
        </div>
    )
}