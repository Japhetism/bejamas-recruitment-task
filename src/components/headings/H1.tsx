import React, { ReactNode, FC } from 'react'

interface H1Props {
    children: ReactNode
}

const H1: FC<H1Props> = ({ children }) => <h1>{children}</h1>

export default H1;