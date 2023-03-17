import { GoEyeClosed, GoEye } from 'react-icons/go';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { GUITAR_DEMO_SOUNDS } from '../../global/constants';
import { setAutoPlay } from '../../store/instrumentsSlice';

import Guitar from '../../components/Guitar/Guitar/Guitar';
import useAutoPlay from '../../hooks/useAutoPlay';
import InstrumentPage from '../../components/InstrumentPage/InstrumentPage';
import styles from './GuitarPage.module.scss';
import useInstrumentClass from '../../hooks/useInstrumentClass';

const GuitarPage = () => {
    const { handleAutoPlay } = useAutoPlay();
    const { setClassName } = useInstrumentClass('string');
    const { isAutoPlay } = useAppSelector((store) => store.instruments);

    const [isVisible, setIsVisible] = useState(false);

    const dispatch = useAppDispatch();

    const demoBtnHandler = (keys: string[], delay: number) => {
        handleAutoPlay(keys, delay);
        dispatch(setAutoPlay(true));
    };

    return (
        <InstrumentPage
            disabled={isAutoPlay}
            title='guitar'
            onDemoClick={demoBtnHandler}
            soundsDemo={GUITAR_DEMO_SOUNDS}
        >
            <Guitar isAutoPlay={isAutoPlay} isVisible={isVisible} setClassName={setClassName}/>
            {isVisible
                ? <GoEyeClosed className={styles.icon} onClick={() => setIsVisible(!isVisible)} />
                : <GoEye className={styles.icon} onClick={() => setIsVisible(!isVisible)} />
            }
        </InstrumentPage>
    );
};

export default GuitarPage;
