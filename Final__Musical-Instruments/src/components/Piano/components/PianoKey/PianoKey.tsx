/* eslint-disable no-useless-escape */
import styles from './PianoKey.module.scss';
import useInstrument from '../../../../hooks/useInstrument';

type TKey = {
    note: string;
    audio: string;
    keyDown: string;
    disabled: boolean;
    setPianoClassName: (note: string, active: boolean, disabled: boolean) => string;
}

const PianoKey = (props:TKey) => {
    const {
        audio,
        keyDown,
        note,
        setPianoClassName,
        disabled,
    } = props;

    const {
        audioRef,
        playAudio,
        active,
        setActive,
    } = useInstrument(keyDown);

    return (
        <div>
            <audio
                ref={audioRef}
                src={audio}
                onEnded={() => setActive(false)}
            />
            <div
                className={active
                    ? styles[setPianoClassName(note, active, disabled)]
                    : styles[setPianoClassName(note, active, disabled)]
                }
                style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
                onClick={() => !disabled && playAudio()}
            >
                <span>{keyDown}</span>
            </div>
        </div>
    );
};

export default PianoKey;
