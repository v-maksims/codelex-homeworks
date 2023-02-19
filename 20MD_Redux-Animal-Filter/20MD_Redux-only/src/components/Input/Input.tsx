import React, { HTMLInputTypeAttribute } from 'react';
import style from './Input.module.scss';

type TInputProps = {
    value: string;
    type: HTMLInputTypeAttribute;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required: boolean;
}

export default function Input (props: TInputProps) {
    const {
        onChange,
        placeholder,
        required,
        type,
        value,
    } = props;

    return (
        <input
            className={style.input}
            value={value}
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
        />
    );
}
