import React, { FC } from 'react'
import Container from "./Container";

interface SelectProps {
    onChange?: () => void;
}

const Select: FC<SelectProps> = ({ onChange }) => {
    return (
        <select>
            <option>Price</option>
            <option>Alphabetically</option>
        </select>
    )
}

export default Select;
