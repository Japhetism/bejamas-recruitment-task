import React, { FC } from 'react'
import Container from "./Container";

interface InputProps {
    onChange?: () => void;
    type: string;
    name: string;
    value?: string
}

const Input: FC<InputProps> = ({ type, name, value, onChange }) => {
    return (
        <Container {...{className: "filter-options-container"}}>
            <input className="filter-options-input" type={type} value={value} onChange={onChange} />
            <label className="filter-options-label">{name}</label>
        </Container>
    )
}

export default Input;
