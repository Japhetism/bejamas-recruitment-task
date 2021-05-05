import React, { ReactNode, FC } from 'react'

interface H3Props {
    children: ReactNode
}

const H3: FC<H3Props> = ({ children }) => <h3>{children}</h3>

export default H3;