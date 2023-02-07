import { useState } from 'react';

export default function useInput (){
    const [value, setValue] =useState('');
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return{
        value,
        changeHandler
    };
}