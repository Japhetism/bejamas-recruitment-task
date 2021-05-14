import React, { FC } from 'react'

interface SelectProps {
    onChange(option: string): any
}

const Select: FC<SelectProps> = ({ onChange }) => {
    return (
        <select onChange={event => onChange(event.target.value)}>
            <option value="price">Price</option>
            <option value="name">Alphabetically</option>
        </select>
    )
}

export default Select;
