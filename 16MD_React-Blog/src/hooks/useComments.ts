import { useState } from 'react';

export default function useComments () {
    const [value, setValue] = useState('');

    const clearArea = () => {
        setValue('');
    };

    const commentHandler = (val: string) => {
        setValue(val);
    };

    return {
        value,
        commentHandler,
        clearArea,
    };
}
