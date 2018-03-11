import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header class="header">
        <NavLink to="/"><h1>Expensify</h1></NavLink>
    </header>
);

export default Header;