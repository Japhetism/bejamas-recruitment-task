import React, { ReactNode, FC } from 'react'

interface ContainerProps {
    children: ReactNode;
    height: number;
    width: number;
    color: string;
}

const Container: FC<ContainerProps> = ({ color, height, width, children }) => <div style={{ backgroundColor: color, height: `${height}px`, width: `${width}px` }}>{children}</div>

export default Container;