import React, { FC } from 'react'

interface InputProps {
    onChange: () => void;
    type: string;
    value: string
}

const Input: FC<InputProps> = ({ type, value, onChange }) => <input type={type} value={value} onChange={onChange} />

export default Input;
