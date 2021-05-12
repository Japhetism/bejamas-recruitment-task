import React, { FC, ReactNode } from 'react'

interface RowProps {
    className?: string;
    children: ReactNode;
}

const Row: FC<RowProps> = ({ className, children }) => <div className={`row ${className}`}>{children}</div>

export default Row;
