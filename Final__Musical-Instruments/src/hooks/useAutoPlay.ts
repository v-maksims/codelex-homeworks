import { setAutoPlay } from '../store/instrumentsSlice';
import { useAppDispatch } from '../store/storeHooks';

const useAutoPlay = () => {
    const dispatch = useAppDispatch();

    const handleAutoPlay = (keys: string[], delayNum: number) => {
        let delay = 0;
        keys.forEach((key, i) => {
            setTimeout(() => {
                document.dispatchEvent(new KeyboardEvent('keyup', { key }));
                if (keys.length === i + 1) {
                    dispatch(setAutoPlay(false));
                }
            }, delay);

            delay += delayNum;
        });
    };

    return {
        handleAutoPlay,
    };
};

export default useAutoPlay;
