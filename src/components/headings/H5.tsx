import React, { ReactNode, FC } from 'react'

interface H5Props {
    children: ReactNode;
    className?: string;
}

const H5: FC<H5Props> = ({ children, className }) => <h5 className={className}>{children}</h5>

export default H5;