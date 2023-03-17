import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { TRIANGLE_DEMO_SOUNDS, TRIANGLE } from '../../global/constants';
import { setAutoPlay } from '../../store/instrumentsSlice';

import InstrumentPage from '../../components/InstrumentPage/InstrumentPage';
import Triangle from '../../components/Triangle/Triangle';
import useAutoPlay from '../../hooks/useAutoPlay';

const TrianglePage = () => {
    const { isAutoPlay } = useAppSelector((store) => store.instruments);
    const dispatch = useAppDispatch();

    const { handleAutoPlay } = useAutoPlay();

    const demoBtnHandler = (keys: string[], delay: number) => {
        handleAutoPlay(keys, delay);
        dispatch(setAutoPlay(true));
    };

    return (
        <InstrumentPage
            disabled={isAutoPlay}
            title='triangle'
            onDemoClick={demoBtnHandler}
            soundsDemo={TRIANGLE_DEMO_SOUNDS}
        >
            <Triangle isAutoPlay={isAutoPlay} notes={TRIANGLE}/>
        </InstrumentPage>
    );
};

export default TrianglePage;
