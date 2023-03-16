import { useRef, useState } from 'react';
import { useAppSelector } from '../store/storeHooks';

const useInstrument = (keyDown: string) => {
    const { volume } = useAppSelector((store) => store.instruments);

    const audioRef = useRef<HTMLAudioElement>(null);

    const [active, setActive] = useState(false);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
            setActive(true);
            audioRef.current.play();
            audioRef.current.currentTime = 0;
        }
    };

    document.addEventListener('keyup', (e: KeyboardEvent) => {
        if (e.key === keyDown) {
            playAudio();
        }
    });

    return {
        audioRef,
        playAudio,
        active,
        setActive,
    };
};

export default useInstrument;
