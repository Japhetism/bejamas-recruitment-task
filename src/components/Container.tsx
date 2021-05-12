import React, { ReactNode, FC } from 'react'

interface ContainerProps {
    children?: ReactNode;
    height?: number;
    width?: number;
    color?: string;
    className?: string;
}

const Container: FC<ContainerProps> = ({ color, height, width, className, children }) => <div className={className} style={{ backgroundColor: color, height: `${height}px`, width: `${width}px` }}>{children}</div>

export default Container;