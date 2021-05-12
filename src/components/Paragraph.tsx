import React, { ReactNode, FC } from 'react'

interface ParagraphProps {
    children: ReactNode;
    className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, className }) => <p className={className}>{children}</p>

export default Paragraph;