import React, { FC } from 'react'

interface HRProps {
    color?: string;
    height?: number;
    width?: number;
    className?: string;
}

const HR: FC<HRProps> = ({ color, height, width, className }) => <hr className={className} style={{backgroundColor: color, width: `${width}px`, height: `${height}px`}} />

export default HR;
