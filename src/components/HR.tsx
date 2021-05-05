import React, { FC } from 'react'

interface HRProps {
    color: string;
    height: number;
    width: number;
}

const HR: FC<HRProps> = ({ color, height, width }) => <hr style={{backgroundColor: color, width: `${width}px`, height: `${height}px`}} />

export default HR;
