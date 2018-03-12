import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid';


// @TODO add components to fill header links
const Header = () => (
    <div className="header">
        <div className="header__brand">
            <ul>
                <li>
                    <NavLink to="/" className="navbar__home"><FontAwesomeIcon icon={faCircleNotch} /><span>Login</span></NavLink>
                </li>
            </ul>
        </div>
    </div>
);

export default Header;