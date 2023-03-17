import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { GUITAR_DEMO_SOUNDS } from '../../global/constants';

import Guitar from '../../components/Guitar/Guitar/Guitar';
import Button from '../../components/UI/Button/Button';
import styles from './GuitarPage.module.scss';
import useAutoPlay from '../../hooks/useAutoPlay';
import { setAutoPlay } from '../../store/instrumentsSlice';

const GuitarPage = () => {
    const { isAutoPlay } = useAppSelector((store) => store.instruments);
    const { handleAutoPlay } = useAutoPlay();

    const dispatch = useAppDispatch();

    return (
        <div className={styles.pageWrap}>
            <h1 className={styles.title}>guitar</h1>
            <Guitar isAutoPlay={isAutoPlay} />
            <div className={styles.btnWrap}>
                {
                    GUITAR_DEMO_SOUNDS.map(({ delay, keys, name }, i) => (
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

export default GuitarPage;
