import useInstrument from '../../../../hooks/useInstrument';
import styles from './GuitarString.module.scss';

type TGuitarStringProps = {
    audio: string;
    keyDown: string;
    disabled: boolean;
    setGuitarClassName: (active: boolean, disabled: boolean) => string;
}

const GuitarString = (props: TGuitarStringProps) => {
    const {
        audio,
        keyDown,
        disabled,
        setGuitarClassName,
    } = props;

    const {
        audioRef,
        playAudio,
        active,
        setActive,
    } = useInstrument(keyDown);

    return (
        <>
            <div
                className={styles[setGuitarClassName(active, disabled)]}
                onClick={() => !disabled && playAudio()}
            >
                <audio
                    ref={audioRef}
                    src={audio}
                    onEnded={() => setActive(false)}
                />
            </div>
        </>
    );
};

export default GuitarString;
