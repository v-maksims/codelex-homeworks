import React, { useState } from 'react';

export default function useTextArea (val: string) {
    const [value, setValue] = useState(val);

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return {
        value,
        changeHandler,
    };
}
