import React, { FC } from 'react'

interface SelectProps {
    onChange(option: string): any;
    data?: any;
}

const Select: FC<SelectProps> = ({ onChange, data }) => {
    return (
        <select onChange={event => onChange(event.target.value)}>
            {data.map((option:any) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
    )
}

export default Select;
