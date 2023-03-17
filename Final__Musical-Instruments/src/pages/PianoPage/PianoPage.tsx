import { PIANO_DEMO_SOUNDS } from '../../global/constants';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { setAutoPlay } from '../../store/instrumentsSlice';

import Piano from '../../components/Piano/Piano/Piano';
import useAutoPlay from '../../hooks/useAutoPlay';
import InstrumentPage from '../../components/InstrumentPage/InstrumentPage';

const PianoPage = () => {
    const { handleAutoPlay } = useAutoPlay();

    const { isAutoPlay } = useAppSelector((store) => store.instruments);
    const dispatch = useAppDispatch();

    const demoBtnHandler = (keys: string[], delay: number) => {
        handleAutoPlay(keys, delay);
        dispatch(setAutoPlay(true));
    };

    return (
        <InstrumentPage
            disabled={isAutoPlay}
            title='piano'
            onDemoClick={demoBtnHandler}
            soundsDemo={PIANO_DEMO_SOUNDS}
        >
            <Piano isAutoPlay={isAutoPlay} />
        </InstrumentPage>
    );
};

export default PianoPage;
