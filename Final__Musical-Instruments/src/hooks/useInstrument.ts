import { useEffect, useRef, useState } from 'react';

const useInstrument = (keyDown: string) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const [active, setActive] = useState(false);

    const activeHandler = () => {
        setActive(!active);
    };

    const playAudio = () => {
        if (audioRef.current) {
            activeHandler();
            audioRef.current.play();
            audioRef.current.currentTime = 0;
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.05;
        }
        document.addEventListener('keyup', (e: KeyboardEvent) => {
            if (e.key === keyDown) {
                playAudio();
            }
        });
    }, []);

    return {
        audioRef,
        playAudio,
        active,
        activeHandler,
    };
};

export default useInstrument;
