import React, { ReactNode, FC } from 'react'

interface H4Props {
    children: ReactNode
}

const H4: FC<H4Props> = ({ children }) => <h4>{children}</h4>

export default H4;