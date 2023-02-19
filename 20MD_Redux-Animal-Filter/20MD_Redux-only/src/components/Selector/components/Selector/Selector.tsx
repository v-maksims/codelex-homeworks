import React from 'react';
import style from './Selector.module.scss';

type TSelectorProps = {
    children: React.ReactNode;
    required: boolean;
    value: string;
    onChange:(e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Selector (props: TSelectorProps) {
    const {
        children,
        required,
        value,
        onChange,
    } = props;

    return (
        <select
            className={style.selectWrap}
            required={required}
            value={value}
            onChange={onChange}

        >
            <option value='' disabled>Select species</option>
            {children}
        </select>
    );
}
