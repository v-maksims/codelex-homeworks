/* eslint-disable no-useless-escape */
import styles from './PianoKey.module.scss';
import useInstrument from '../../../../hooks/useInstrument';

type TKey = {
    note: string;
    audio: string;
    keyDown: string;
    setPianoClassName: (note: string, active: boolean) => 'keyBlack--active' | 'keyBlack' | 'key--active' | 'key'
}

const PianoKey = (props:TKey) => {
    const {
        audio,
        keyDown,
        note,
        setPianoClassName,
    } = props;

    const {
        audioRef,
        playAudio,
        active,
        activeHandler,
    } = useInstrument(keyDown);

    return (
        <div>
            <audio
                ref={audioRef}
                src={audio}
                onEnded={activeHandler}
            />
            <div
                className={active
                    ? styles[setPianoClassName(note, active)]
                    : styles[setPianoClassName(note, active)]
                }
                onClick={playAudio}
            >
                <span>{keyDown}</span>
            </div>
        </div>
    );
};

export default PianoKey;
