import React from 'react';
import style from '../styles/Modal.module.scss';

type TModalProps = {
    children: React.ReactNode
    onClick: () => void
}

export default function Modal (props: TModalProps) {
    const {
        children,
        onClick,
    } = props;

    return (
        <div>
            <div
                className={ style.modal }
                onClick={ onClick }
            ></div>
            <div className={ style.form }>
                {children}
            </div>
        </div>
    );
}
