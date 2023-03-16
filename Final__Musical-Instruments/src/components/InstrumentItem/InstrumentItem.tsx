import { NavLink } from 'react-router-dom';
import styles from './InstrumentItem.module.scss';

type TInstrumentItemProps = {
    image: string;
    label: string;
    to: string;
}

const InstrumentItem = ({ image, label, to }:TInstrumentItemProps) => (
    <NavLink to={to} >
        <div className={styles.wrapper}>
            <img className={styles.image} src={image} alt={label} />
            <span className={styles.instrument}>{ label }</span>
        </div>
    </NavLink>
);

export default InstrumentItem;
