import NavItem from '../components/NavItem/NavItem';
import styles from './NavigationBar.module.scss';

const NavigationBar = () => (
    <div className={styles.navBar}>
        <NavItem to='/' label='home'/>
        <NavItem to='/instruments' label='instruments'/>
    </div>
);

export default NavigationBar;
