import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid';

const Header = () => (
    <div className="header">
        <div className="header__brand">
            <ul>
                <li>
                    <NavLink to="/"><span className="header__logo"><FontAwesomeIcon icon={faCircleNotch} /></span><h1 className="header__title">Expensify</h1></NavLink>
                </li>
            </ul>
        </div>
    </div>
);

export default Header;