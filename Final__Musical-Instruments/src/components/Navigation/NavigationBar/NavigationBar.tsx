import NavItem from '../components/NavItem/NavItem';
import styles from './NavigationBar.module.scss';

const NavigationBar = () => (
    <>
        <NavItem to='/' label='home'/>
        <NavItem to='/instruments' label='instruments'/>
    </>
);

export default NavigationBar;
