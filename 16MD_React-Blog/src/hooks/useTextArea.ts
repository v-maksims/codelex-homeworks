import { useState } from 'react';

export default function useTextArea(){
    const [value, setValue]=useState('');

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const clearValue = () => {
        setValue('');
    };
    return{
        value,
        changeHandler,
        clearValue,
    };
}