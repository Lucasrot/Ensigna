/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import './navbar.css';

const NavbarLink = ({ category }) => {
    return (
        <NavLink to={`/category/${category}`} className="navbar-list-a">
            {category}
        </NavLink>
    );
};

export default NavbarLink;
