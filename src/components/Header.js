import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div class="header">
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">help</NavLink>
        <NavLink to="/dasd" activeClassName="is-active">404</NavLink>
    </div>
);

export default Header;