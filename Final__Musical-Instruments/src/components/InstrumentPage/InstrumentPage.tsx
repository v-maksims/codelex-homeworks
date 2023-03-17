import React from 'react';
import { TDemoSound } from '../../global/constants';

import Button from '../UI/Button/Button';
import styles from './InstrumentPage.module.scss';

type TInstrumentPageProps = {
    title: string;
    children: React.ReactNode;
    soundsDemo: TDemoSound[];
    onDemoClick: (keys: string[], delay: number) => void;
    disabled: boolean;
}

const InstrumentPage = (props: TInstrumentPageProps) => {
    const {
        title,
        children,
        soundsDemo,
        onDemoClick,
        disabled,
    } = props;

    return (
        <div className={styles.pageWrap}>
            <h1 className={styles.title}>{title}</h1>
            {children}
            <div className={styles.btnWrap}>
                {
                    soundsDemo
                        .map(({ delay, keys, name }, i) => (
                            <Button
                                key={i}
                                label={name}
                                onClick={() => onDemoClick(keys, delay)}
                                type='button'
                                disabled={disabled}
                            />
                        ))
                }
            </div>
            <Button
                label='return back'
                onClick={() => window.history.back()}
                type='button'
            />
        </div>
    );
};

export default InstrumentPage;
