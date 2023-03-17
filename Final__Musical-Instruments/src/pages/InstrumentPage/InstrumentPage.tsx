import InstrumentItem from '../../components/InstrumentItem/InstrumentItem';
import styles from './InstrumentPage.module.scss';

const InstrumentPage = () => (
    <>
        <h1 className={styles.title}>Instruments list:</h1>
        <div className={styles.instrumentsWrap}>
            <InstrumentItem label='piano' image='.\Instruments\logo\piano.png' to='/piano'/>
            <InstrumentItem label='guitar' image='.\Instruments\logo\guitar.jpg' to='/guitar'/>
            <InstrumentItem label='triangle' image='.\Instruments\logo\triangle.jpg' to='/triangle'/>
        </div>
    </>
);

export default InstrumentPage;
