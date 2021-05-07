import React, { FC } from 'react'

interface InputProps {
    onChange?: () => void;
    type: string;
    name: string;
    value?: string
}

const Input: FC<InputProps> = ({ type, name, value, onChange }) => {
    return (
        <>
            <input type={type} value={value} onChange={onChange} />
            <label>{name}</label>
        </>
    )
}

export default Input;
