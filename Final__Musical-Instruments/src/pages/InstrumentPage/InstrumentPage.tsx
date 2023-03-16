import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const InstrumentPage = () => {
    const [one, setOne] = useState(null);
    return (
        <NavLink to='/piano'>Piano</NavLink>
    );
};

export default InstrumentPage;
