/* eslint-disable react/prop-types */
import CartWidget from "../cartWidget/CartWidget";
import './navbar.css';
import Logo from '../../assets/img/Logo.png';
import NavbarLink from "./NavbarLink";
import { categories } from "../../mock/MockData.js";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <h1>{title}</h1>
                    </div>
                    <div className="navbar-list">
                    {categories.map((element, index) => {
                        return <NavbarLink key={index} category={element} />;
                    })}
                    </div>
                    <CartWidget />
                </nav>
            </header>
        </>
    )
}
export default Navbar