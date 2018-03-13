import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch, faAlignJustify, faPencilAlt, faQuestionCircle, faExclamationCircle } from '@fortawesome/fontawesome-free-solid';

const Navbar = () => (
    <nav>
        <ul className="navbar__brand">
            <li>
                <NavLink to="/"><FontAwesomeIcon icon={faCircleNotch} /><h1>Expensify</h1></NavLink>
            </li>
        </ul>
        <ul className="navbar__main">
            <li>
                <NavLink to="/" activeClassName="is-active" exact={true}><FontAwesomeIcon icon={faAlignJustify} /><span>list expenses</span></NavLink>
            </li>
            <li>
                <NavLink to="/create" activeClassName="is-active"><FontAwesomeIcon icon={faPencilAlt} /><span>add expense</span></NavLink>
            </li>
            <li>
                <NavLink to="/help" activeClassName="is-active"><FontAwesomeIcon icon={faQuestionCircle} /><span>help</span></NavLink>
            </li>
            <li>
                <NavLink to="/dasd" activeClassName="is-active"><FontAwesomeIcon icon={faExclamationCircle} /><span>report</span></NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar;