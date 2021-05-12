import React, { ReactNode, FC } from 'react'

interface H2Props {
    children: ReactNode;
    className?: string;
}

const H2: FC<H2Props> = ({ className, children }) => <h2 className={className}>{children}</h2>

export default H2;