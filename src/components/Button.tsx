import React, { ReactNode, FC } from 'react'

interface ButtonProps {
    children: ReactNode;
    onClick(item: any): any;
    color?: string;
    className: string;
    width?: number;
    product?: any
}

const Button: FC<ButtonProps> = ({ children, color, className, width, onClick }) => <button className={className} style={{backgroundColor: color, width: `${width}px`}} onClick={() => onClick("ddddd")}>{children}</button>

export default Button;