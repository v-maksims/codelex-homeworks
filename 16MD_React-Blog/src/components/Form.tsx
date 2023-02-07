import React from 'react';
import Button from './Button';
import style from '../styles/Form.module.scss';
type TFormProps = {
    children: React.ReactNode,
    label: string
}

export default function Form({children,label}:TFormProps){
    return(
        <form 
            className={style.form}
            onSubmit={(e) => {
                e.preventDefault();
                // console.log(e.currentTarget.);
            }}
        >
            <span className={style.title}>{label}</span>
            {children}
            <Button
                label='post'
                type='submit'
            />
        </form>
    );
}