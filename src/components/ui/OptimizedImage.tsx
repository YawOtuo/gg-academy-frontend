import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { CSS, styled } from "@stitches/react";

type Props = {
  className?: string;
  src: string;
  rounded?: boolean;
  border?: boolean;
  alt?: string;
  circle?: boolean;
  variant?: "fill" | "cover" | "contain";
  width?: number;
  css?: CSS;
} & NextImageProps;
import Image from "next/image";

const OptimizedImage = ({
  variant = "fill",
  src,
  className,
  alt = "Image",
  css,
  width,
  ...rest
}: Props) => {
  return (
    <div className={`${className} relative w-full`}>
      <NextImage
        objectFit="cover"
        {...rest}
        alt={alt}
        fill={width ? false : true}
        width={width}
        src={src}
      />
    </div>
  );
};

export default OptimizedImage;
