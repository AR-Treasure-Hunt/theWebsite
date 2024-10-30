import React from 'react';
import { assets } from './assets/assets';
import ResponsivePixelArtImage from './image';
import { Link } from '@tanstack/react-router';
import { useHandleSmoothScroll } from '@/utils/useHandleSmoothScroll';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[100svh] overflow-hidden bg-[#F0EBFF]" id="home">
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
          {/* Join The Adventure Button */}
          <Link
            to="/registration"
            className="flex justify-center items-center bg-[#003F5A] text-white text-[2.1vh] sm:text-[2.5vh] lg:text-[3vh] xl:text-[4vh] rounded-[1vh] hover:bg-[#002a3d] transition-colors whitespace-nowrap h-[5vh] md:h-[6vh] lg:h-[7vh] xl:h-[8vh] w-[20vh] lg:w-[23vh] xl:w-[30vh]">
            Join The Adventure
          </Link>
          {/* Learn More Button */}
          <a
            href="#"
            className="flex justify-center items-center text-[#003F5A] text-[2.1vh] sm:text-[2.5vh] lg:text-[3vh] xl:text-[4vh] backdrop-blur border-[0.3vh] lg:border-[0.3vh] border-[#003F5A] hover:bg-[#f0f0f0] transition-colors whitespace-nowrap h-[5vh] md:h-[6vh] lg:h-[7vh] xl:h-[8vh] w-[20vh] md:w-[16vh] lg:w-[20vh] rounded-[1vh]"
            onClick={(e) => {
              useHandleSmoothScroll(e, 'about-section');
            }}>
            Learn More
          </a>
        </div>
      </div>

      {/* Background Elements */}
      <ResponsivePixelArtImage
        src={assets.cloudup}
        alt="Cloud Upper"
        sizes={{
          default: {
            show: true,
            width: 'auto',
            height: '9%',
            position: { right: '-10%', top: '20.7%' }
          },
          sm: {
            show: true,
            width: 'auto',
            height: '10.5%',
            position: { right: '0', top: '20.7%' }
          },
          md: { show: true, width: 'auto', height: '13%', position: { right: '0', top: '18%' } },
          lg: { show: true, width: 'auto', height: '14%', position: { right: '0', top: '10%' } },
          xl: { show: true, width: 'auto', height: '14%', position: { right: '0', top: '10%' } },
          '2xl': { show: true, width: 'auto', height: '16%', position: { right: '0', top: '10%' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.clouddown}
        alt="Cloud Lower"
        sizes={{
          default: {
            show: true,
            width: 'auto',
            height: '9%',
            position: { left: '-15%', top: '39%' }
          },
          sm: { show: true, width: 'auto', height: '10.5%', position: { left: '-3%', top: '43%' } },
          md: { show: true, width: 'auto', height: '13%', position: { left: '0', top: '40%' } },
          lg: { show: true, width: 'auto', height: '15%', position: { left: '0', top: '34%' } },
          xl: { show: true, width: 'auto', height: '16%', position: { left: '0', top: '34%' } },
          '2xl': { show: true, width: 'auto', height: '16%', position: { left: '0', top: '35%' } }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Mountains}
        alt="Mountains"
        sizes={{
          default: {
            show: true,
            width: '100%',
            height: '22vh',
            position: { bottom: '3%', left: '0' }
          },
          sm: { show: true, width: '100%', height: 'auto', position: { bottom: '5%', left: '0' } },
          md: { show: true, width: '100%', height: 'auto', position: { bottom: '5%', left: '0' } },
          lg: { show: true, width: '100%', height: 'auto', position: { bottom: '5%', left: '0' } },
          xl: { show: true, width: '100%', height: 'auto', position: { bottom: '5%', left: '0' } },
          '2xl': {
            show: true,
            width: '100%',
            height: 'auto',
            position: { bottom: '5%', left: '0' }
          }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Ground}
        alt="Ground"
        sizes={{
          default: {
            show: true,
            width: '100%',
            height: '6vh',
            position: { bottom: '0%', left: '0', right: '0', zIndex: '20' }
          },
          sm: {
            show: true,
            width: '100%',
            height: '6vh',
            position: { bottom: '0%', left: '0', right: '0', zIndex: '20' }
          },
          md: {
            show: true,
            width: '100%',
            height: '7vh',
            position: { bottom: '0%', left: '0', right: '0', zIndex: '20' }
          },
          lg: {
            show: true,
            width: '100%',
            height: '10vh',
            position: { bottom: '0%', left: '0', right: '0', zIndex: '20' }
          },
          xl: {
            show: true,
            width: '100%',
            height: '10vh',
            position: { bottom: '0%', left: '0', right: '0', zIndex: '20' }
          },
          '2xl': {
            show: true,
            width: '100%',
            height: '12vh',
            position: { bottom: '0%', left: '0', right: '0', zIndex: '20' }
          }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Pik}
        alt="Pik"
        sizes={{
          default: { show: false, width: '0', height: '0', position: { right: '0' } },
          sm: { show: false, width: '0', height: '0', position: { right: '0' } },
          md: { show: false, width: '0', height: '0', position: { right: '0' } },
          lg: {
            show: true,
            width: '30vw',
            height: 'auto',
            position: { right: '0%', bottom: '8%', zIndex: '10' }
          },
          xl: {
            show: true,
            width: '30vw',
            height: 'auto',
            position: { right: '0%', bottom: '9%', zIndex: '10' }
          },
          '2xl': {
            show: true,
            width: '30vw',
            height: 'auto',
            position: { right: '0%', bottom: '9%', zIndex: '10' }
          }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.Temple}
        alt="Temple"
        sizes={{
          default: {
            show: true,
            width: 'auto',
            height: '7vh',
            position: { left: '55%', bottom: '5.5vh', zIndex: '10' }
          },
          sm: {
            show: true,
            width: 'auto',
            height: '7vh',
            position: { left: '54%', bottom: '5.3vh', zIndex: '10' }
          },
          md: {
            show: true,
            width: 'auto',
            height: '9vh',
            position: { left: '38%', bottom: '6vh', zIndex: '10' }
          },
          lg: {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '20%', bottom: '9vh', zIndex: '10' }
          },
          xl: {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '21%', bottom: '9vh', zIndex: '10' }
          },
          '2xl': {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '21%', bottom: '11.5vh', zIndex: '10' }
          }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.TreeL1}
        alt="Tree 1"
        sizes={{
          default: {
            show: true,
            width: 'auto',
            height: '7vh',
            position: { left: '37%', bottom: '5.5vh', zIndex: '10' }
          },
          sm: {
            show: true,
            width: 'auto',
            height: '7vh',
            position: { left: '37%', bottom: '5.2vh', zIndex: '10' }
          },
          md: {
            show: true,
            width: 'auto',
            height: '9vh',
            position: { left: '20%', bottom: '6vh', zIndex: '10' }
          },
          lg: {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '9%', bottom: '9vh', zIndex: '10' }
          },
          xl: {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '9%', bottom: '9vh', zIndex: '10' }
          },
          '2xl': {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '9%', bottom: '11vh', zIndex: '10' }
          }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.TreeL2}
        alt="Tree 2"
        sizes={{
          default: {
            show: true,
            width: 'auto',
            height: '7vh',
            position: { left: '26%', bottom: '5.5vh', zIndex: '10' }
          },
          sm: {
            show: true,
            width: 'auto',
            height: '7vh',
            position: { left: '26%', bottom: '5.2vh', zIndex: '10' }
          },
          md: {
            show: true,
            width: 'auto',
            height: '9vh',
            position: { left: '25%', bottom: '6vh', zIndex: '10' }
          },
          lg: {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '13%', bottom: '9vh', zIndex: '10' }
          },
          xl: {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '13%', bottom: '9vh', zIndex: '10' }
          },
          '2xl': {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '13%', bottom: '11vh', zIndex: '10' }
          }
        }}
      />
      <ResponsivePixelArtImage
        src={assets.TreeR}
        alt="Tree R"
        sizes={{
          default: {
            show: true,
            width: 'auto',
            height: '7vh',
            position: { left: '77%', bottom: '5.5vh', zIndex: '10' }
          },
          sm: {
            show: true,
            width: 'auto',
            height: '7vh',
            position: { left: '77%', bottom: '5.2vh', zIndex: '10' }
          },
          md: {
            show: true,
            width: 'auto',
            height: '9vh',
            position: { left: '65%', bottom: '6vh', zIndex: '10' }
          },
          lg: {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '29%', bottom: '9vh', zIndex: '10' }
          },
          xl: {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '29%', bottom: '9vh', zIndex: '10' }
          },
          '2xl': {
            show: true,
            width: 'auto',
            height: '11vh',
            position: { left: '29%', bottom: '11vh', zIndex: '10' }
          }
        }}
      />

      <ResponsivePixelArtImage
        src={assets.Treasure}
        alt="Treasure"
        sizes={{
          default: { show: false, width: '0', height: '0', position: { left: '0' } },
          sm: { show: false, width: '0', height: '0', position: { left: '0' } },
          md: {
            show: true,
            width: 'auto',
            height: '5.5vh',
            position: { left: '52%', bottom: '6%', zIndex: '30' }
          },
          lg: {
            show: true,
            width: 'auto',
            height: '5.5vh',
            position: { left: '52%', bottom: '9%', zIndex: '30' }
          },
          xl: {
            show: true,
            width: 'auto',
            height: '5.5vh',
            position: { left: '52%', bottom: '9%', zIndex: '30' }
          },
          '2xl': {
            show: true,
            width: 'auto',
            height: '5.5vh',
            position: { left: '52%', bottom: '10%', zIndex: '30' }
          }
        }}
      />
    </div>
  );
};
export default HeroSection;
