import React, { ReactNode, FC } from 'react'

interface H2Props {
    children: ReactNode
}

const H2: FC<H2Props> = ({ children }) => <h2>{children}</h2>

export default H2;