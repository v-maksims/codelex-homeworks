import { PIANO_DEMO_SOUNDS } from '../../global/constants';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { setAutoPlay } from '../../store/instrumentsSlice';

import Piano from '../../components/Piano/Piano/Piano';
import Button from '../../components/UI/Button/Button';
import useAutoPlay from '../../hooks/useAutoPlay';
import styles from './PianoPage.module.scss';

const PianoPage = () => {
    const { isAutoPlay } = useAppSelector((store) => store.instruments);
    const dispatch = useAppDispatch();

    const { handleAutoPlay } = useAutoPlay();

    return (
        <div className={styles.pageWrap}>
            <h1 className={styles.title}>piano</h1>
            <Piano
                isAutoPlay={isAutoPlay}
            />
            <div className={styles.btnWrap}>
                {
                    PIANO_DEMO_SOUNDS.map(({ delay, keys, name }, i) => (
                        <Button
                            key={i}
                            label={name}
                            onClick={() => {
                                handleAutoPlay(keys, delay);
                                dispatch(setAutoPlay(true));
                            }}
                            type='button'
                            disabled={isAutoPlay}
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

export default PianoPage;
