import { TInstrumentNote } from '../../global/constants';

import TriangleItem from './components/TriangleItem/TriangleItem';
import styles from './Triangle.module.scss';

type TTriangleProps = {
    isAutoPlay: boolean;
    notes: TInstrumentNote[];
    setClassName: (active: boolean, disabled: boolean) => string;
}

const Triangle = ({ isAutoPlay, notes, setClassName }: TTriangleProps) => (
    <>
        <img className={styles.image} src="./Instruments/logo/Triangle_Instrument.png" alt="triangle" />
        <div className={styles.keysWrap}>
            {
                notes.map(({ audio, keyDown }, i) => (
                    <TriangleItem
                        key={i}
                        disabled={isAutoPlay}
                        audio={audio}
                        keyDown={keyDown}
                        setClassName={setClassName}
                    />
                ))
            }
        </div>
    </>
);

export default Triangle;
