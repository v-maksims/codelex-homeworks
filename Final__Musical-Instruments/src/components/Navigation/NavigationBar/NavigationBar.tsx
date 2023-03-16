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
            <NavItem to='/' label='home'/>
            <NavItem to='/instruments' label='instruments'/>
            <div>
                <InputRange max={100} min={0} value={volume} onChange={(e) => dispatch(setVolume(+e.currentTarget.value)) }/>
            </div>
        </div>
    );
};

export default NavigationBar;
