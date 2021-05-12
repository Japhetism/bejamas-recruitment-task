import React, { ReactNode, FC } from 'react'

interface SpanProps {
    children: ReactNode;
    className?: string;
}

const Span: FC<SpanProps> = ({ children, className }) => <span className={className}>{children}</span>

export default Span;