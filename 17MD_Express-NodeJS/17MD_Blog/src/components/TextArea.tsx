import React from 'react';
import style from '../styles/TextArea.module.scss';

type TTextAreaProps = {
    placeholder: string,
    required: boolean,
    label: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    rows: number,
}

export default function TextArea (props: TTextAreaProps) {
    const {
        label,
        name,
        required,
        rows,
        onChange,
        placeholder,
        value,
    } = props;

    return (
        <>
            <span className={ style.text }>
                {label}:
            </span>
            <textarea
                className={ style.area }
                value={ value }
                name={ name }
                required={ required }
                onChange={ onChange }
                rows={ rows }
                placeholder={ placeholder }
            ></textarea>
        </>
    );
}
