import React from 'react';
import style from './Modal.module.scss';

type TModalProps = {
    children: React.ReactNode
}

export default function Modal ({ children }: TModalProps) {
    return (
        <div className={style.modal}>
            {children}
        </div>
    );
}
