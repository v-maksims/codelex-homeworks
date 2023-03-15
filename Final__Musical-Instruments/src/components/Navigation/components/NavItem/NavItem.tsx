import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.scss';

type TNavItemProps = {
    label: string;
    to: string;
}

const NavItem = ({ label, to }:TNavItemProps) => (
    <NavLink to={to}>
        {label}
    </NavLink>
);

export default NavItem;
