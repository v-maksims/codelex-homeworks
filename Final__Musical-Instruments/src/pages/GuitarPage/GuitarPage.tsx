import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { GUITAR_DEMO_SOUNDS } from '../../global/constants';

import Guitar from '../../components/Guitar/Guitar/Guitar';
import useAutoPlay from '../../hooks/useAutoPlay';
import { setAutoPlay } from '../../store/instrumentsSlice';
import InstrumentPage from '../../components/InstrumentPage/InstrumentPage';

const GuitarPage = () => {
    const { isAutoPlay } = useAppSelector((store) => store.instruments);
    const { handleAutoPlay } = useAutoPlay();

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
            <Guitar isAutoPlay={isAutoPlay} />
        </InstrumentPage>
    );
};

export default GuitarPage;
