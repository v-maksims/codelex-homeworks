import { TInstrumentNote } from '../../global/constants';

import TriangleItem from './components/TriangleItem/TriangleItem';
import styles from './Triangle.module.scss';

type TTriangleProps = {
    isAutoPlay: boolean,
    notes: TInstrumentNote[]
}

const Triangle = ({ isAutoPlay, notes }: TTriangleProps) => {
    const setTriangleClassName = (active: boolean, disabled: boolean) => {
        if (active) {
            return 'key--active';
        }

        if (disabled) {
            return 'key--disabled';
        }

        return 'key';
    };

    return (
        <div>
            <img className={styles.image} src="./Instruments/logo/Triangle_Instrument.png" alt="triangle" />
            <div className={styles.keysWrap}>
                {
                    notes.map(({ audio, keyDown }, i) => (
                        <TriangleItem
                            key={i}
                            disabled={isAutoPlay}
                            audio={audio}
                            keyDown={keyDown}
                            setTriangleClassName={setTriangleClassName}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Triangle;
