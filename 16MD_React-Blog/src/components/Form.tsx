import React from 'react';
import style from '../styles/Form.module.scss';

type TFormProps = {
    label: string,
    children: React.ReactNode,
}

export default function Form (props: TFormProps) {
    const {
        children,
        label,
    } = props;

    return (
        <>
            <form className={ style.form }>
                <span className={ style.title }>
                    {label}
                </span>
                {children}
            </form>
        </>
    );
}
