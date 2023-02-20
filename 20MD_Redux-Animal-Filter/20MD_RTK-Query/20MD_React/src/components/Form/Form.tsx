import React from 'react';
import style from './Form.module.scss';

type TFormProps = {
    text: string;
    onSubmit: () => void;
    children: React.ReactNode
}

export default function Form (props: TFormProps) {
    const { children, onSubmit, text } = props;
    return (
        <form
            className={style.form}
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <span className={style.text}>{text}</span>
            {children}
        </form>
    );
}
