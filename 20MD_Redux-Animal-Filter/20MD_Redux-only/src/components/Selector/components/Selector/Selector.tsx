import React from 'react';
import style from './Selector.nodule.scss';

type TSelectorProps = {
    children: React.ReactNode
}

export default function Selector (props: TSelectorProps) {
    const { children } = props;
    return (
        <select>{children}</select>
    );
}
