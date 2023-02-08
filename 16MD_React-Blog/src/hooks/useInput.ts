import React, { useState } from 'react';

export default function useInput (inp: string) {
    const [value, setValue] = useState(inp);

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return {
        value,
        changeHandler,
    };
}
