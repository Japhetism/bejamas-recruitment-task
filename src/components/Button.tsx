import React, { ReactNode, FC } from 'react'

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    color?: string;
    className: string;
    width: number
}

const Button: FC<ButtonProps> = ({ children, color, className, width, onClick }) => <button className={className} style={{backgroundColor: color, width: `${width}px`}} onClick={onClick}>{children}</button>

export default Button;