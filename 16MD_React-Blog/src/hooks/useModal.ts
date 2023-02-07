import { useState } from 'react';

export default function useModal(){
    const [modal,setModal] = useState(false);

    const clickHandler = () => {
        setModal(!modal);
    };

    return{
        modal,
        clickHandler
    };
}