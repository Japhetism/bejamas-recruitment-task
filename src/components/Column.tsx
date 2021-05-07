import React, { FC, ReactNode } from 'react'

interface ColumnProps {
    className?: string;
    children: ReactNode;
}

const Column: FC<ColumnProps> = ({ className, children }) => <div className={className}>{children}</div>

export default Column;
