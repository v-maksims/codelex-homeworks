import { NavLink } from 'react-router-dom';

type TNavigationProps = {
    label: string,
    to:string,
    className: string
}

export default function Navigation (props:TNavigationProps) {
    const {
        className,
        label,
        to,
    } = props;

    return (
        <>
            <NavLink
                className={ className }
                to={ to }
            >
                {label}
            </NavLink>
        </>
    );
}
