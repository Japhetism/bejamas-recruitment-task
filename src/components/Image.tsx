import React, { FC } from 'react'

interface ImageProps {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const ImageProps: FC<ImageProps> = ({ src, height, width, alt }) => <img src={src} height={`${height}px`} width={`${width}px`} alt={alt} />

export default Image;
