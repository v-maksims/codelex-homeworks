import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import style from './Selector.module.scss';

type TSelectorProps = {
    register:UseFormRegister<FieldValues>;
    options: string[];
    name: string;
}

export default function Selector (props: TSelectorProps) {
    const {
        register,
        options,
        name,
        ...rest
    } = props;
    return (
        <select
            className={style.selectWrap}
            {...register(name)} {...rest}>
            {options.map((value) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    );
}
