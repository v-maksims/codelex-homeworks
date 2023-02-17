import React, { HTMLInputTypeAttribute } from 'react';
import style from './Input.module.scss';

type TInputProps = {
    type: HTMLInputTypeAttribute;
    value: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
    placeholder: string;
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
        <>
            <input
                className={style.input}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
            />
        </>
    );
}
