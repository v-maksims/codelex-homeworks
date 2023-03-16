import React from 'react';
import styles from './Form.module.scss';

type TFormProps = {
    text: string;
    onSubmit: () => void;
    children: React.ReactNode
}

export default function Form (props: TFormProps) {
    const { children, onSubmit, text } = props;
    return (
        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <span className={styles.text}>{text}</span>
            {children}
        </form>
    );
}
