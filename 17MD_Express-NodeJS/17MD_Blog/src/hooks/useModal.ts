import { useState } from 'react';

export default function useModal () {
    const [modal, setModal] = useState(false);

    const modalHandler = () => {
        setModal(!modal);
    };

    return {
        modal,
        modalHandler,
    };
}
