import React, { ReactNode, FC } from 'react'

interface SpanProps {
    children: ReactNode
}

const Span: FC<SpanProps> = ({ children }) => <span>{children}</span>

export default Span;