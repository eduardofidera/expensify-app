import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <NavLink to="/"><h1>Expensify</h1></NavLink>
    </div>
);

export default Header;