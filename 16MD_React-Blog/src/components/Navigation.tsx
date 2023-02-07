import { NavLink } from 'react-router-dom';

type TNavigationProps = {
    label: string,
    to:string,
    className: string
}

export default function Navigation({label,to,className}:TNavigationProps) {
    return(
        <>
            <NavLink
                className={className}
                to={to}
            >
                {label}
            </NavLink>
        </>
    );
}