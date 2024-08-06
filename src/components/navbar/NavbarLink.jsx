/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import './navbar.css';

const NavbarLink = ({ categories }) => {
    return (
        <NavLink to={`/categoria/${categories}`} className='navbar-list-a'>
            {categories}
        </NavLink>
    );
};

export default NavbarLink