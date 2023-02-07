import React from 'react';
import Button from './Button';
import style from '../styles/Form.module.scss';
import { TBlogs } from '../types/Blogs';
import useCreateBlog from '../hooks/useCreateBlog';

type TFormProps = {
    children: React.ReactNode,
    label: string,
    newData: TBlogs,
    onSubmit:() => void
}

export default function Form(props:TFormProps){
    const{ children, label, newData, onSubmit } = props;
    const { mutate } = useCreateBlog();

    return(
        <form 
            className={style.form}
            onSubmit={(e) => {
                e.preventDefault();
                mutate(newData);
                onSubmit();      
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