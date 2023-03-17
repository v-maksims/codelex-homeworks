import { GUITAR } from '../../../global/constants';

import styles from './Guitar.module.scss';
import GuitarString from '../components/GuitarString/GuitarString';

type TGuitarProps = {
    isAutoPlay: boolean;
    isVisible: boolean;
    setClassName: (active: boolean, disabled: boolean) => string;
}

const Guitar = ({ isAutoPlay, isVisible, setClassName }:TGuitarProps) => (
    <>
        <div className={styles.guitar}>
            <div className={styles.guitarBody}>
                <div className={styles.box1} />
                <div className={styles.box2} />
                <div className={styles.box3} />
                <div className={styles.stringWrap}>
                    {GUITAR.map(({ audio, keyDown }, i) => (
                        <GuitarString
                            key={i}
                            audio={audio}
                            disabled={isAutoPlay}
                            keyDown={keyDown}
                            setGuitarClassName={setClassName}
                        />
                    ))}
                </div>
            </div>
        </div>
        {isVisible && (
            <div className={styles.keysWrap}>
                <span className={styles.keyTitle}>Keys:</span>
                <div className={styles.keys}>
                    {GUITAR.map(({ keyDown }, i) => (
                        <span
                            className={styles.key}
                            key={i}
                        >
                            {keyDown}
                        </span>
                    ))}
                </div>
            </div>
        )}
    </>
);

export default Guitar;
