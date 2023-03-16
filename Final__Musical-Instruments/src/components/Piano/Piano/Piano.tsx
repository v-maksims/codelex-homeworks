import { PIANO } from '../../../global/constants';

import PianoKey from '../components/PianoKey/PianoKey';
import styles from './Piano.module.scss';

type TPianoProps = {
    isAutoPlay: boolean;
}

const Piano = ({ isAutoPlay }:TPianoProps) => {
    const setPianoClassName = (note: string, active: boolean, disabled: boolean) => {
        if (note.length > 1) {
            if (active) {
                return 'keyBlack--active';
            }

            if (disabled) {
                return 'keyBlack--disabled';
            }

            return 'keyBlack';
        }

        if (active) {
            return 'key--active';
        }

        if (disabled) {
            return 'key--disabled';
        }

        return 'key';
    };

    return (
        <div className={styles.keyWrap}>
            <div className={styles.keyList}>
                {PIANO.map(({ audio, keyDown, note }, i) => (
                    <PianoKey
                        note={note}
                        audio={audio}
                        keyDown={keyDown}
                        key={i}
                        setPianoClassName={setPianoClassName}
                        disabled={isAutoPlay}
                    />
                ))}
            </div>
        </div>
    );
};

export default Piano;
