import React from 'react';
import style from './Form.module.scss';

type TFormProps = {
    onSubmit: () => void;
    children: React.ReactNode
}

export default function Form (props: TFormProps) {
    const { children, onSubmit } = props;
    return (
        <form
            className={style.form}
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            {children}
        </form>
    );
}
