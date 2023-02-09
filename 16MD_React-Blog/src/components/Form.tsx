import React from 'react';
import style from '../styles/Form.module.scss';

type TFormProps = {
    label: string,
    children: React.ReactNode,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function Form (props: TFormProps) {
    const {
        children,
        label,
        onSubmit,
    } = props;

    return (
        <>
            <form
                className={ style.form }
                onSubmit={ onSubmit }
            >
                <span className={ style.title }>
                    {label}
                </span>
                {children}
            </form>
        </>
    );
}
