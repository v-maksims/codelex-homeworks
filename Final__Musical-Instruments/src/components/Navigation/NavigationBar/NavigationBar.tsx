import { TbVolume, TbVolume2, TbVolume3 } from 'react-icons/tb';
import { setVolume } from '../../../store/instrumentsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/storeHooks';

import InputRange from '../../UI/InputRange/InputRange';
import NavItem from '../components/NavItem/NavItem';
import styles from './NavigationBar.module.scss';

const NavigationBar = () => {
    const { volume } = useAppSelector((store) => store.instruments);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.navBar}>
            <div className={styles.nav}>
                <NavItem to='/' label='home'/>
                <NavItem to='/instruments' label='instruments'/>
            </div>
            <div className={styles.volumeWrap}>
                <div
                    className={styles.icon}
                    onClick={() => dispatch(setVolume(0))}
                >
                    {volume === 0 && <TbVolume3/>}
                    {(volume > 0 && volume < 50) && <TbVolume2/>}
                    {(volume > 50) && <TbVolume/> }
                </div>
                <div className={styles.volume}>
                    <InputRange
                        max={100}
                        min={0}
                        value={volume}
                        onChange={(e) => dispatch(setVolume(+e.currentTarget.value)) }
                    />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
