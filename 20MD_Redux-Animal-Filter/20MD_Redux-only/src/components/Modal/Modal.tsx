import React from 'react';
import Button from '../Button/Button';
import style from './Modal.module.scss';

type TModalProps = {
    children: React.ReactNode;
    openHandler: () => void
}

const Modal = ({ children, openHandler }: TModalProps) => (
    <div className={style.modal}>
        <div className={style.modalClose}>
            <Button
                label='X'
                type='button'
                onClick={openHandler}
            />
        </div>
        {children}
    </div>
);

export default Modal;
