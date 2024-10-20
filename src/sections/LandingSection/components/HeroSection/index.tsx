import React from 'react';
import { assets } from './assets/assets';
import ResponsivePixelArtImage from './image';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F0EBFF]">
      {/* Main Content */}
      <div className="container px-[5vh] sm:px-[10vh] lg:px-0 md:pl-[13vh] lg:pl-[18vh] md:pr-[6vh] pt-[12vh] sm:pt-[15vh] md:pt-[19vh] lg:pt-[20vh] xl:pt-[17vh] text-[#003F5A] z-30 relative">
        <h1 className="text-[9vh] sm:text-[11vh] md:text-[11vh] lg:text-[11.6vh] xl:text-[14.3vh] mb-[2vh] sm:mb-[1.5vh] lg:mb-[4vh] leading-[7.5vh] sm:leading-[8vh] lg:leading-[4.5vh] text-start tracking-[0.005em]">
          Explore, Solve, And
          <span className="text-[#FF8700]"> Win!</span>
        </h1>
        <h2 className="text-[3vh] sm:text-[4.5vh] lg:text-[6.48vh] xl:text-[8vh] sm:mb-[2vh] md:mb-[1.5vh] lg:mb-[3vh] tracking-[-0.01em]  leading-[3vh]">
          <span className="text-[#008DC9]">The </span>
          Biggest Treasure Hunt
          <span className="text-[#008DC9]"> of Nepal is </span>
          Back<span className="text-[#008DC9]">.</span>
        </h2>
        {/* Button Section */}
        <div className="flex flex-col md:flex-row items-start gap-[2vh] self-stretch mt-[1.5vh] lg:mt-[2vh] xl:mt-[2.5vh] w-full">
          {/* Join The Adventure Button */}
          <a
            href="#"
            className="flex justify-center items-center bg-[#003F5A] text-white text-[2.1vh] sm:text-[3vh] lg:text-[3.5vh] xl:text-[4vh] rounded-lg hover:bg-[#002a3d] transition-colors whitespace-nowrap py-[0.6vh] px-[1vh] md:py-[1.2vh] md:px-[2.5vh] lg:py-[1.75vh] lg:px-[3vh] xl:py-[1.2vh]"
          >
            Join The Adventure
          </a>
          {/* Learn More Button */}
          <a
            href="#"
            className="flex justify-center items-center text-[#003F5A] text-[2.1vh] sm:text-[3vh] lg:text-[3.5vh] xl:text-[4vh] backdrop-blur border-[0.3vh] lg:border-[0.3vh] border-[#003F5A] hover:bg-[#f0f0f0] transition-colors whitespace-nowrap py-[0.5vh] px-[3.7vh] sm:px-[4.9vh]  md:px-[2.5vh]  md:py-[1vh] lg:py-[1.5vh] lg:px-[2.5vh] xl:py-[1vh] rounded-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Background Elements */}
      <ResponsivePixelArtImage
        src={assets.cloudup}
        alt="Cloud Upper"
        sizes={{
          default:{ show: true, width: 'auto', height: '9%', position: { right: '-10%', top: '20.7%'} },
          sm: { show: true, width: 'auto', height: '10.5%', position: { right: '0', top: '20%' } },
          md: { show: true, width: 'auto', height: '13%', position: { right: '0', top: '5%' } },
          lg: { show: true, width: 'auto', height: '14%', position: { right: '0', top: '6%' } },
          xl: { show: true, width: 'auto', height: '14%', position: { right: '0', top: '6%' } },
          '2xl': { show: true, width: 'auto', height: '16%', position: { right: '0', top: '5%' } },
        }}
      />
      <ResponsivePixelArtImage
        src={assets.clouddown}
        alt="Cloud Lower"
        sizes={{
          default: {show: true, width: 'auto', height: '9%', position: { left: '-15%', top: '39%' }  },
          sm: { show: true, width: 'auto', height: '10.5%', position: { left: '-3%', top: '43%' } },
          md: { show: true, width: 'auto', height: '13%', position: { left: '0', top: '38%' } },
          lg: { show: true, width: 'auto', height: '15%', position: { left: '0', top: '34%' } },
          xl: { show: true, width: 'auto', height: '16%', position: { left: '0', top: '34%' } },
          '2xl': { show: true, width: 'auto', height: '16%', position: { left: '0', top: '30%' } },
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Mountains}
        alt="Mountains"
        sizes={{
          default:{ show: true, width: '100%', height: '25%', position: { bottom: '5%', left: '0' }},
          sm: { show: true, width: '100%', height: '25%', position: { bottom: '11%', left: '0' } },
          md: { show: true, width: '100%', height: '56%', position: { bottom: '12%', left: '0' } },
          lg: { show: true, width: '100%', height: '58%', position: { bottom: '10%', left: '0' } },
          xl: { show: true, width: '100%', height: '58%', position: { bottom: '10%', left: '0' } },
          '2xl': { show: true, width: '100%', height: '63%', position: { bottom: '10%', left: '0' } },
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Ground}
        alt="Ground"
        sizes={{
          default:{ show: true, width: '100%', height: '6%', position: { bottom: '0%', left: '0', right: '0', zIndex: '20' } },
          sm: { show: true, width: '100%', height: '6%', position: { bottom: '0%', left: '0', right: '0', zIndex: '20' } },
          md: { show: true, width: '100%', height: '7%', position: { bottom: '0%', left: '0', right: '0', zIndex: '20' } },
          lg: { show: true, width: 'auto', height: '10%', position: { bottom: '0%', left: '0', right: '0', zIndex: '20' } },
          xl: { show: true, width: 'auto', height: 'auto', position: {bottom: '0%', left: '0', right: '0', zIndex: '20' } },
          '2xl': { show: true, width: 'auto', height: 'auto', position: { bottom: '0%', left: '0', right: '0', zIndex: '20'}},
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Pik}
        alt="Pik"
        sizes={{
          default: { show: false, width: '0', height: '0', position: { right: '0' }  },
          sm: { show: false, width: '0', height: '0', position: { right: '0' } },
          md: { show: false, width: '0', height: '0', position: { right: '0' } },
          lg: { show: true, width: 'auto', height: '46%', position: { right: '0%', bottom: '15%', zIndex: '10' } },
          xl: { show: true, width: 'auto', height: '46%', position: { right: '0%', bottom: '15%', zIndex: '10' } },
          '2xl': { show: true, width: 'auto', height: '59%', position: { right: '0%', bottom: '14%', zIndex: '10' } },
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Temple}
        alt="Temple"
        sizes={{
          default:{ show: true, width: 'auto', height: '7%', position: { left: '55%', bottom: '5.5%', zIndex: '10' }},
          sm: { show: true, width: 'auto', height: '7%', position: { left: '55%', bottom: '11.4%', zIndex: '10' } },
          md: { show: true, width: 'auto', height: '9%', position: { left: '38%', bottom: '12.4%', zIndex: '10' } },
          lg: { show: true, width: 'auto', height: '11%', position: { left: '21%', bottom: '15.5%', zIndex: '10' } },
          xl: { show: true, width: 'auto', height: '11%', position: { left: '21%', bottom: '15.5%', zIndex: '10' } },
          '2xl': { show: true, width: 'auto', height: '11%', position: { left: '21%', bottom: '17.5%', zIndex: '10' } },
        }}
      />
      <ResponsivePixelArtImage
        src={assets.TreeL1}
        alt="Tree 1"
        sizes={{
          default: { show: true, width: 'auto', height: '7%', position: { left: '37%', bottom: '5.5%', zIndex: '10' } },
          sm: { show: true, width: 'auto', height: '7%', position: { left: '37%', bottom: '11.3%', zIndex: '10' } },
          md: { show: true, width: 'auto', height: '9%', position: { left: '20%', bottom: '12.4%', zIndex: '10' } },
          lg: { show: true, width: 'auto', height: '11%', position: { left: '9%', bottom: '15%', zIndex: '10' } },
          xl: { show: true, width: 'auto', height: '11%', position: { left: '9%', bottom: '15%', zIndex: '10' } },
          '2xl': { show: true, width: 'auto', height: '11%', position: { left: '9%', bottom: '17.5%', zIndex: '10' } },
        }}
      />
      <ResponsivePixelArtImage
        src={assets.TreeL2}
        alt="Tree 2"
        sizes={{
          default: { show: true, width: 'auto', height: '7%', position: { left: '26%', bottom: '5.5%', zIndex: '10' } },
          sm: { show: true, width: 'auto', height: '7%', position: { left: '26%', bottom: '11.3%', zIndex: '10' } },
          md: { show: true, width: 'auto', height: '9%', position: { left: '25%', bottom: '12.4%', zIndex: '10' } },
          lg: { show: true, width: 'auto', height: '11%', position: { left: '13%', bottom: '15%', zIndex: '10' } },
          xl: { show: true, width: 'auto', height: '11%', position: { left: '13%', bottom: '15%', zIndex: '10' } },
          '2xl': { show: true, width: 'auto', height: '11%', position: { left: '13%', bottom: '17.5%', zIndex: '10' } },
        }}
      />
      <ResponsivePixelArtImage
        src={assets.TreeR}
        alt="Tree R"
        sizes={{
          default:  { show: true, width: 'auto', height: '7%', position: { left: '77%', bottom: '5.5%', zIndex: '10' }},
          sm: { show: true, width: 'auto', height: '7%', position: { left: '77%', bottom: '11.3%', zIndex: '10' } },
          md: { show: true, width: 'auto', height: '9%', position: { left: '65%', bottom: '12.4%', zIndex: '10' } },
          lg: { show: true, width: 'auto', height: '11%', position: { left: '29%', bottom: '15%', zIndex: '10' } },
          xl: { show: true, width: 'auto', height: '11%', position: { left: '29%', bottom: '15%', zIndex: '10' } },
          '2xl': { show: true, width: 'auto', height: '11%', position: { left: '29%', bottom: '17.5%', zIndex: '10' } },
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Treasure}
        alt="Treasure"
        sizes={{
          default: { show: false, width: '0', height: '0', position: { left: '0' } },
          sm: { show: false, width: '0', height: '0', position: { left: '0' } },
          md: { show: false, width: '0', height: '0', position: { left: '0'  } },
          lg: { show: true, width: 'auto', height: '5.5%', position: { left: '52%', bottom: '14.8%', zIndex: '30' } },
          xl: { show: true, width: 'auto', height: '5.5%', position: { left: '52%', bottom: '14.8%', zIndex: '30' } },
          '2xl': { show: true, width: 'auto', height: '5.5%', position: { left: '52%', bottom: '17%', zIndex: '30' } },
        }}
      />
    </div>
  );
};
export default HeroSection;
