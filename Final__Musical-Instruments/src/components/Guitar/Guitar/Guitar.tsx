import { GUITAR } from '../../../global/constants';

import styles from './Guitar.module.scss';
import GuitarString from '../components/GuitarString/GuitarString';

type TGuitarProps = {
    isAutoPlay: boolean;
}

const Guitar = ({ isAutoPlay }:TGuitarProps) => {
    const setGuitarClassName = (active: boolean, disabled: boolean) => {
        if (active) {
            return 'string--active';
        }

        if (disabled) {
            return 'string--disabled';
        }

        return 'string';
    };
    return (
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
                                setGuitarClassName={setGuitarClassName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Guitar;
