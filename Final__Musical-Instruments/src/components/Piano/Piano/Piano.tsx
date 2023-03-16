import PianoKey from '../components/PianoKey/PianoKey';
import { PIANO } from '../../../global/constants';
import styles from './Piano.module.scss';

const Piano = () => {
    const setPianoClassName = (note: string, active: boolean) => {
        if (note.length > 1) {
            if (active) {
                return 'keyBlack--active';
            }

            return 'keyBlack';
        }

        if (active) {
            return 'key--active';
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
                    />
                ))}
            </div>
        </div>
    );
};

export default Piano;
