import InstrumentItem from '../../components/InstrumentItem/InstrumentItem';
import styles from './InstrumentPage.module.scss';

const InstrumentPage = () => (
    <div className={styles.instrumentsWrap}>
        <InstrumentItem label='piano' image='.\public\Instruments\logo\piano.png' to='/piano'/>
    </div>
);

export default InstrumentPage;
