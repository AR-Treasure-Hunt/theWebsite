import React from 'react';
import { assets } from './assets/assets';
import ResponsivePixelArtImage from './image';
import { Link } from '@tanstack/react-router';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F0EBFF]">
      {/* Main Content */}
      <div className="text-center lg:text-start lg:px-0 lg:pl-[10vh] xl:pl-[15vh] pt-[25vh] sm:pt-[28vh] md:pt-[30vh] lg:pt-[25vh] xl:pt-[17vh] text-[#003F5A] z-30 relative">
        <h1 className="text-[9vh] sm:text-[11vh] md:text-[13vh] lg:text-[13vh] xl:text-[14.3vh] mb-[2vh] sm:mb-[1.5vh] lg:mb-[4vh] leading-[7.5vh] sm:leading-[8vh] lg:leading-[9vh] tracking-[0.005em]">
          Explore, Solve, And
          <span className="text-[#FF8700]"> Win!</span>
        </h1>
        <h2 className="text-[3vh] sm:text-[4vh] md:text-[5vh] lg:text-[6vh] xl:text-[8vh] sm:mb-[2vh] md:mb-[1.5vh] lg:mb-[3vh] tracking-[-0.01em] leading-[3vh] lg:leading-[5vh]">
          <span className="text-[#008DC9]">The </span>
          Biggest Treasure Hunt
          <span className="text-[#008DC9]"> of Nepal is </span>
          Back<span className="text-[#008DC9]">.</span>
        </h2>
        {/* Button Section */}
        <div className="flex flex-col md:flex-row items-center gap-[2vh] self-stretch mt-[1.5vh] lg:mt-[2vh] xl:mt-[2.5vh] w-full justify-center lg:justify-start">
          <Link
            to="/registration"
            className="flex justify-center items-center bg-[#003F5A] text-white text-[2.1vh] sm:text-[3vh] lg:text-[3vh] xl:text-[4vh] rounded-lg hover:bg-[#002a3d] transition-colors whitespace-nowrap py-[0.6vh] px-[1vh] md:py-[1.2vh] md:px-[2.5vh] lg:py-[1.75vh] lg:px-[3vh] xl:py-[1.2vh]"
          >
            Join The Adventure
          </Link>
          <a href="#" className="flex justify-center items-center text-[#003F5A] text-[2.1vh] sm:text-[3vh] lg:text-[3vh] xl:text-[4vh] backdrop-blur border-[0.3vh] lg:border-[0.3vh] border-[#003F5A] hover:bg-[#f0f0f0] transition-colors whitespace-nowrap py-[0.5vh] px-[3.7vh] sm:px-[4.9vh] md:px-[2.5vh] md:py-[0.93vh] lg:py-[1.4vh] lg:px-[2.5vh] xl:py-[1vh] rounded-lg">
            Learn More
          </a>
        </div>
      </div>

      {/* Background Elements */}
      <ResponsivePixelArtImage
        src={assets.cloudup}
        alt="Cloud Upper"
        sizes={{
          default: { show: true, width: 'auto', height: '15%', position: { right: '-5%', top: '15%' } },
          sm: { show: true, width: 'auto', height: '15%', position: { right: '0', top: '15%' } },
          md: { show: true, width: 'auto', height: '15%', position: { right: '0', top: '15%' } },
          lg: { show: true, width: 'auto', height: '15%', position: { right: '0', top: '15%' } },
          xl: { show: true, width: 'auto', height: '15%', position: { right: '0', top: '15%' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.clouddown}
        alt="Cloud Lower"
        sizes={{
          default: { show: true, width: 'auto', height: '15%', position: { left: '-5%', top: '35%' } },
          sm: { show: true, width: 'auto', height: '15%', position: { left: '0', top: '35%' } },
          md: { show: true, width: 'auto', height: '15%', position: { left: '0', top: '35%' } },
          lg: { show: true, width: 'auto', height: '15%', position: { left: '0', top: '35%' } },
          xl: { show: true, width: 'auto', height: '15%', position: { left: '0', top: '35%' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Mountains}
        alt="Mountains"
        sizes={{
          default: { show: true, width: '100%', height: '35%', position: { bottom: '10%', left: '0' } },
          sm: { show: true, width: '100%', height: '35%', position: { bottom: '10%', left: '0' } },
          md: { show: true, width: '100%', height: '35%', position: { bottom: '10%', left: '0' } },
          lg: { show: true, width: '100%', height: '35%', position: { bottom: '10%', left: '0' } },
          xl: { show: true, width: '100%', height: '35%', position: { bottom: '10%', left: '0' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Ground}
        alt="Ground"
        sizes={{
          default: { show: true, width: '100%', height: '12%', position: { bottom: '0', left: '0', zIndex: '20' } },
          sm: { show: true, width: '100%', height: '12%', position: { bottom: '0', left: '0', zIndex: '20' } },
          md: { show: true, width: '100%', height: '12%', position: { bottom: '0', left: '0', zIndex: '20' } },
          lg: { show: true, width: '100%', height: '12%', position: { bottom: '0', left: '0', zIndex: '20' } },
          xl: { show: true, width: '100%', height: '12%', position: { bottom: '0', left: '0', zIndex: '20' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Pik}
        alt="Pik"
        sizes={{
          default: { show: true, width: '30%', height: 'auto', position: { right: '2%', bottom: '11%', zIndex: '10' } },
          sm: { show: true, width: '30%', height: 'auto', position: { right: '2%', bottom: '11%', zIndex: '10' } },
          md: { show: true, width: '30%', height: 'auto', position: { right: '2%', bottom: '11%', zIndex: '10' } },
          lg: { show: true, width: '30%', height: 'auto', position: { right: '2%', bottom: '11%', zIndex: '10' } },
          xl: { show: true, width: '30%', height: 'auto', position: { right: '2%', bottom: '11%', zIndex: '10' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Temple}
        alt="Temple"
        sizes={{
          default: { show: true, width: 'auto', height: '10%', position: { left: '40%', bottom: '11%', zIndex: '10' } },
          sm: { show: true, width: 'auto', height: '10%', position: { left: '40%', bottom: '11%', zIndex: '10' } },
          md: { show: true, width: 'auto', height: '10%', position: { left: '40%', bottom: '11%', zIndex: '10' } },
          lg: { show: true, width: 'auto', height: '10%', position: { left: '40%', bottom: '11%', zIndex: '10' } },
          xl: { show: true, width: 'auto', height: '10%', position: { left: '40%', bottom: '11%', zIndex: '10' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.TreeL1}
        alt="Tree Left 1"
        sizes={{
          default: { show: true, width: 'auto', height: '8%', position: { left: '15%', bottom: '11%', zIndex: '10' } },
          sm: { show: true, width: 'auto', height: '8%', position: { left: '15%', bottom: '11%', zIndex: '10' } },
          md: { show: true, width: 'auto', height: '8%', position: { left: '15%', bottom: '11%', zIndex: '10' } },
          lg: { show: true, width: 'auto', height: '8%', position: { left: '15%', bottom: '11%', zIndex: '10' } },
          xl: { show: true, width: 'auto', height: '8%', position: { left: '15%', bottom: '11%', zIndex: '10' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.TreeL2}
        alt="Tree Left 2"
        sizes={{
          default: { show: true, width: 'auto', height: '8%', position: { left: '25%', bottom: '11%', zIndex: '10' } },
          sm: { show: true, width: 'auto', height: '8%', position: { left: '25%', bottom: '11%', zIndex: '10' } },
          md: { show: true, width: 'auto', height: '8%', position: { left: '25%', bottom: '11%', zIndex: '10' } },
          lg: { show: true, width: 'auto', height: '8%', position: { left: '25%', bottom: '11%', zIndex: '10' } },
          xl: { show: true, width: 'auto', height: '8%', position: { left: '25%', bottom: '11%', zIndex: '10' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.TreeR}
        alt="Tree Right"
        sizes={{
          default: { show: true, width: 'auto', height: '8%', position: { left: '55%', bottom: '11%', zIndex: '10' } },
          sm: { show: true, width: 'auto', height: '8%', position: { left: '55%', bottom: '11%', zIndex: '10' } },
          md: { show: true, width: 'auto', height: '8%', position: { left: '55%', bottom: '11%', zIndex: '10' } },
          lg: { show: true, width: 'auto', height: '8%', position: { left: '55%', bottom: '11%', zIndex: '10' } },
          xl: { show: true, width: 'auto', height: '8%', position: { left: '55%', bottom: '11%', zIndex: '10' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Treasure}
        alt="Treasure"
        sizes={{
          default: { show: true, width: 'auto', height: '5%', position: { left: '47%', bottom: '11%', zIndex: '30' } },
          sm: { show: true, width: 'auto', height: '5%', position: { left: '47%', bottom: '11%', zIndex: '30' } },
          md: { show: true, width: 'auto', height: '5%', position: { left: '47%', bottom: '11%', zIndex: '30' } },
          lg: { show: true, width: 'auto', height: '5%', position: { left: '47%', bottom: '11%', zIndex: '30' } },
          xl: { show: true, width: 'auto', height: '5%', position: { left: '47%', bottom: '11%', zIndex: '30' } }
        }}
      />
    </div>
  );
};

export default HeroSection;