import React, { ReactNode, FC } from 'react'

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    color?: string;
}

const Button: FC<ButtonProps> = ({ children, color, onClick }) => <button style={{backgroundColor: color}} onClick={onClick}>{children}</button>

export default Button;