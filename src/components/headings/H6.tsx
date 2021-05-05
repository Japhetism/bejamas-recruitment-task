import React, { ReactNode, FC } from 'react'

interface H6Props {
    children: ReactNode
}

const H6: FC<H6Props> = ({ children }) => <h6>{children}</h6>

export default H6;