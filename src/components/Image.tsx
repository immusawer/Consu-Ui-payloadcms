import React from 'react';

interface ImageProps {
  image: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
    sizes?: Record<string, string>;
  };
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ image, className }) => {
  return (
    <img
      src={image.url}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};