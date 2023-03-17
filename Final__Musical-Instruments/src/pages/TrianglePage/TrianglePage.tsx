import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { TRIANGLE_DEMO_SOUNDS, TRIANGLE } from '../../global/constants';
import { setAutoPlay } from '../../store/instrumentsSlice';

import InstrumentPage from '../../components/InstrumentPage/InstrumentPage';
import Triangle from '../../components/Triangle/Triangle';
import useAutoPlay from '../../hooks/useAutoPlay';
import useInstrumentClass from '../../hooks/useInstrumentClass';

const TrianglePage = () => {
    const { setClassName } = useInstrumentClass('key');
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
            title='triangle'
            onDemoClick={demoBtnHandler}
            soundsDemo={TRIANGLE_DEMO_SOUNDS}
        >
            <Triangle
                isAutoPlay={isAutoPlay}
                notes={TRIANGLE}
                setClassName={setClassName}
            />
        </InstrumentPage>
    );
};

export default TrianglePage;
