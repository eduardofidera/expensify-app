import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHome, faPencilAlt, faQuestionCircle, faExclamationCircle } from '@fortawesome/fontawesome-free-solid'

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <NavLink to="/" activeClassName="is-active" exact={true}><FontAwesomeIcon icon={faHome} /></NavLink>
            </li>
            <li>
                <NavLink to="/create" activeClassName="is-active"><FontAwesomeIcon icon={faPencilAlt} /></NavLink>
            </li>
            <li>
                <NavLink to="/help" activeClassName="is-active"><FontAwesomeIcon icon={faQuestionCircle} /></NavLink>
            </li>
            <li>
                <NavLink to="/dasd" activeClassName="is-active"><FontAwesomeIcon icon={faExclamationCircle} /></NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar;