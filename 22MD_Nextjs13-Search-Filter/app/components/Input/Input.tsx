import React, { HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.scss';

type TInputProps = {
    type: HTMLInputTypeAttribute,
    placeholder: string,
    required?: boolean,
    label?: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = (props:TInputProps) => {
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
        <div className={styles.inputWrap}>
            {label && <span className={ styles.text }>{label}:</span>}
            <input
                className={ styles.input }
                type={ type }
                placeholder={ placeholder }
                value={ value }
                onChange={ onChange }
                required={ required }
                name={ name }
                autoComplete='off'
            />
        </div>
    );
};

export default Input;
