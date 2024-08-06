/* eslint-disable react/prop-types */
import CartWidget from "../cartWidget/CartWidget";
import './navbar.css';
import Logo from '../../assets/img/Logo.png';
import NavbarLink from "./NavbarLink";

import { Link } from "react-router-dom";

const Navbar = ({ categories }) => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="navbar-list">
                        {categories.map((category, index) => {
                            return <NavbarLink key={index} categories={category} />;
                        })}
                    </div>
                    <CartWidget />
                </nav>
            </header>
        </>
    )
}
export default Navbar