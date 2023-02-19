import React from 'react';
import style from './CardList.module.scss';

type TCardListProps = {
    children: React.ReactNode
}

export default function CardList ({ children }:TCardListProps) {
    return (
        <div className={style.list}>
            {children}
        </div>
    );
}
