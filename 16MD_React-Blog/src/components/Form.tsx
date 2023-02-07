import React from 'react';
import Button from './Button';
import style from '../styles/Form.module.scss';
import {useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { TBlogs } from '../types/Blogs';
import { queryClient } from '../main';

type TFormProps = {
    children: React.ReactNode,
    label: string,
    newData: TBlogs,
    onSubmit:() => void
}

export default function Form({children,label,newData , onSubmit}:TFormProps){
    const {mutate} = useMutation({
        mutationFn: (data:TBlogs) => {
            return axios.post('http://localhost:3004/blogs',data);
        },
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey:['blogs']
            });
        }
    });
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