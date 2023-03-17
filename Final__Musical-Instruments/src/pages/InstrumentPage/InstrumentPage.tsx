import InstrumentItem from '../../components/InstrumentItem/InstrumentItem';
import styles from './InstrumentPage.module.scss';

const InstrumentPage = () => (
    <>
        <h1 className={styles.title}>Instruments list:</h1>
        <div className={styles.instrumentsWrap}>
            <InstrumentItem label='piano' image='.\public\Instruments\logo\piano.png' to='/piano'/>
            <InstrumentItem label='guitar' image='.\public\Instruments\logo\guitar.jpg' to='/guitar'/>
        </div>
    </>
);

export default InstrumentPage;
