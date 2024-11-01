import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CoinSparkle, DiamondSword, Book } from '@/components/Assets';

interface Props {
    year: string;
    roundObj: {
        title: string;
        icon: string;
        description: string;
    }[];
    detailsObj: {
        year: string;
        title: string;
        prizePool: string;
        participants: string;
        college: string;
        roundDetails: string;
    }
}

export default function IterationDetails({ year, detailsObj, roundObj }: Props) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div id={year} className="md:p-8 my-8 text-white">
            <h2 className="text-6xl md:text-7xl font-bold mb-1 tracking-wide">{detailsObj.year}</h2>
            <p className="text-4xl md:text-5xl mb-24 text-crayola-bright-yellow tracking-wide">({detailsObj.title})</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-moussaka border-none col-span-2 md:col-span-3 relative p-4 h-36 sm:h-52 rounded-lg flex">
          <img
            src={CoinSparkle}
            alt="Prize"
            className="absolute top-[-40%] right-10 self-end w-48 sm:w-80 h-auto"
          />
          <div className="flex flex-col justify-end h-full">
            <p className="text-3xl text-deep-saffron tracking-wide">Total Prize Pool</p>
            <p className="text-3xl md:text-8xl tracking-wide text-deep-saffron">
              NRs.<span className="text-deep-saffron"> {detailsObj.prizePool}</span>+
            </p>
          </div>
        </div>

        <div className="bg-sacramento-state-green border-none col-span-1 mt-16  sm:mt-24 md:mt-0 flex items-center justify-center rounded-lg relative p-4 h-32 sm:h-52">
          <img
            src={DiamondSword}
            alt="Participants"
            className="absolute top-[-50%] w-24 h-24 sm:w-48 sm:h-48"
          />
          <div className="flex flex-col justify-end h-full">
            <p className="text-2xl text-maximum-blue-green tracking-wide">Participants</p>
            <p className="text-5xl md:text-7xl tracking-wide text-ice-citadel">
              {detailsObj.participants}
            </p>
          </div>
        </div>

        <div className="bg-black border-none col-span-1 mt-16 sm:mt-24 md:hidden flex items-center justify-center rounded-lg relative p-4 h-32 sm:h-52">
          <img
            src={Book}
            alt="Participants"
            className="absolute top-[-50%] w-24 h-24 sm:w-48 sm:h-48"
          />
          <div className="flex flex-col justify-end h-full">
            <p className="text-2xl text-maximum-blue-green tracking-wide">College/Uni</p>
            <p className="text-5xl md:text-7xl tracking-wide text-ice-citadel">
              {detailsObj.college}
            </p>
          </div>
        </div>
      </div>

      <div className="md:block hidden">
        <h3 className="text-5xl md:text-7xl tracking-wide mb-32 text-deep-saffron">
          The{' '}
          <span className="text-metallic-yellow">{roundObj.length === 3 ? 'Three' : 'Two'}</span>{' '}
          rounds
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 z-30">
          {roundObj.map((round, index) => (
            <div key={index} className="relative">
              <img
                src={round.icon}
                alt={round.title}
                className="absolute top-[-45%] left-1/2 transform -translate-x-1/2 z-0 max-w-[200px] h-auto opacity-90"
              />
              <div className="bg-moussaka relative border-none rounded-lg h-52 p-4 z-10">
                <h4 className="text-3xl tracking-wide mb-2 text-almondine z-10">{round.title}</h4>
                <hr className="bg-almondine h-[2px]" />
                <p className='font-rubik text-md text-almondine tracking-wide'>
                {round.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Card className="bg-moussaka border-none mt-4">
          <CardContent className="p-4">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide mb-1 text-almondine">
              Some Details
            </h4>
            <p className="text-base font-rubik sm:text-lg md:text-xl text-almondine">
              {detailsObj.roundDetails}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="md:hidden">
        <Button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full tracking-wide text-lg bg-yellow-400 text-black hover:bg-yellow-500 mt-4">
          {showDetails ? 'Hide full details' : 'Read full details'}
        </Button>

        {showDetails && (
          <div className="mt-4">
            <h3 className="text-2xl capitalize font-bold text-yellow-400 mb-24 sm:mb-36">
              The {roundObj.length === 3 ? 'Three' : 'Two'} Rounds
            </h3>
            <div className="space-y-36">
              {roundObj.map((round, index) => (
                <div key={index} className="relative">
                  <img
                    src={round.icon}
                    alt={round.title}
                    className="absolute top-[-60%] sm:top[-20%] left-1/2 transform -translate-x-1/2 z-0 max-w-[200px] sm:max-w-[300px] h-auto opacity-90"
                  />
                  <div className="bg-moussaka relative border-none rounded-lg h-44 sm:h-56 p-4 z-10">
                    <h4 className="text-3xl tracking-wide mb-2 text-almondine z-10">
                      {round.title}
                    </h4>
                    <hr className="bg-almondine h-[2px]" />
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-moussaka border-none mt-4">
              <CardContent className="p-4">
                <h4 className="text-xl tracking-wide sm:text-2xl md:text-3xl lg:text-4xl mb-1 text-almondine">
                  Some Details
                </h4>
                <p className="text-base tracking-wide sm:text-lg md:text-xl text-almondine">
                  {detailsObj.roundDetails}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
