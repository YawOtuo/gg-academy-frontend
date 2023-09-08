import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { CSS, styled } from '@stitches/react';

type Props = {
  className?: string;
  src: string;
  rounded?: boolean;
  border?: boolean;
  alt?: string;
  circle?: boolean;
  variant?: 'fill' | 'cover' | 'contain';
  width?: number;
  css?: CSS;
} & NextImageProps;
import Image from 'next/image';

const OptimizedImage = ({
  variant = 'fill',
  src,
  className,
  alt = 'Image',
  css,
  width,
  ...rest
}: Props) => {
  return (
    <Container css={css} variant={variant} className={className}>
      <NextImage
        {...rest}
        alt={alt}
        fill={width ? false : true}
        width={width}
        src={src}
      />
    </Container>
  );
};

const Container = styled('div', {
  position: 'relative',
  height: '100%',
  width: 'fit',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    borderRadius: 'inherit',
    width: 'inherit',
    height: 'inherit',
  },
  variants: {
    variant: {
      fill: {
        '& img': {
          objectFit: 'fill',
          objectPosition: 'center',
        },
      },
      cover: {
        '& img': {
          objectFit: 'cover',
          objectPosition: 'center',
        },
      },
      contain: {
        '& img': {
          objectFit: 'contain',
          objectPosition: 'center',
        },
      },
    },
    container: {
      flex: {
        display: 'flex',
      },
      block: {
        display: 'block',
      },
      grid: {
        display: 'grid',
      },
    },
  },

  defaultVariants: {
    variant: 'fill',
    container: 'flex',
  },
});
export default OptimizedImage;
