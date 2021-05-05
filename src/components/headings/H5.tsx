import React, { ReactNode, FC } from 'react'

interface H5Props {
    children: ReactNode
}

const H5: FC<H5Props> = ({ children }) => <h5>{children}</h5>

export default H5;