import React from 'react';

interface SizeConfig {
  show: boolean;
  width: string;
  height: string;
  position: { [key: string]: string };
}

interface ResponsivePixelArtImageProps {
  src: string;
  alt: string;
  sizes: {
    default: SizeConfig;
    sm?: SizeConfig;
    md?: SizeConfig;
    lg?: SizeConfig;
    xl?: SizeConfig;
    '2xl'?: SizeConfig;
  };
}

const ResponsivePixelArtImage: React.FC<ResponsivePixelArtImageProps> = ({ src, alt, sizes }) => {
  const isFullWidthImage = alt === 'Ground' || alt === 'Mountains';

  const renderImage = (size: SizeConfig, showClasses: string) =>
    size.show && (
      <img
        src={src}
        alt={alt}
        className={`absolute ${showClasses} responsive-image ipad-friendly`}
        style={{
          width: isFullWidthImage ? '100%' : size.width,
          height: size.height,
          ...size.position,
          imageRendering: 'pixelated',
          objectFit: isFullWidthImage ? 'cover' : 'contain'
        }}
      />
    );

  return (
    <>
      {renderImage(sizes.default, 'block sm:hidden')}
      {sizes.sm &&
        renderImage(sizes.sm, 'hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden')}
      {sizes.md &&
        renderImage(sizes.md, 'hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden')}
      {sizes.lg &&
        renderImage(sizes.lg, 'hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden')}
      {sizes.xl &&
        renderImage(sizes.xl, 'hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden')}
      {sizes['2xl'] &&
        renderImage(sizes['2xl'], 'hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block')}
    </>
  );
};

export default ResponsivePixelArtImage;
