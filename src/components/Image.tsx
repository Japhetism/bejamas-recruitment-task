import React, { FC } from 'react'

interface ImageProps {
    src: any;
    width?: number;
    height?: number;
    alt?: string;
    textPosition?: string;
    text?: string;
    className?: string;
}

const Image: FC<ImageProps> = ({ src, className, height, width, alt, textPosition, text }) => {
    return (
        <div className="image-container">
            <img src={src} className={className} alt={alt} />
            {textPosition === "bottom-left" && <div className="bottom-left">{text}</div>}
            {textPosition === "top-left" && <div className="top-left">{text}</div>}
            {textPosition === "top-right" && <div className="top-right">{text}</div>}
            {textPosition === "bottom-right" && <div className="bottom-right">{text}</div>}
            {textPosition === "centered" && <div className="centered">{text}</div>}
        </div>
    )
}

export default Image;
