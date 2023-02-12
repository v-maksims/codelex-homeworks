import React from 'react';
import style from '../styles/Input.module.scss';

type TInputProps = {
    type: HTMLInputElement['type'],
    placeholder: string,
    required: boolean,
    label: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function Input (props: TInputProps) {
    const {
        type = 'text',
        placeholder,
        required,
        label,
        name,
        value,
        onChange,
    } = props;

    return (
        <>
            <span className={ style.text }>{label}:</span>
            <input
                className={ style.input }
                type={ type }
                placeholder={ placeholder }
                defaultValue={ value }
                onChange={ onChange }
                required={ required }
                name={ name }
            />
        </>
    );
}
