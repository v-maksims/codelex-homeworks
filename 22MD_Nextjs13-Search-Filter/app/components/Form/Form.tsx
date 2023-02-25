import React from 'react';
import styles from './Form.module.scss';

type TFormProps = {
    text: string;
    onSubmit: () => void;
    children: React.ReactNode
    className: string
}

const Form = (props:TFormProps) => {
    const {
        children,
        onSubmit,
        text,
        className,
    } = props;
    return (
        <form
            className={className}
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <span className={styles.text}>{text}</span>
            {children}
        </form>
    );
};

export default Form;
