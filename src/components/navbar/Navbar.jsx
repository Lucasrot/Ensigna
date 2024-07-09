/* eslint-disable react/prop-types */
import CartWidget from "../cartWidget/CartWidget";
import './navbar.css';
import Logo from '../../assets/img/Logo.png';

const Navbar = ({ categories }) => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="navbar-list">
                        <a href="#"> {categories[0]} </a>
                        <a href="#"> {categories[1]} </a>
                        <a href="#"> {categories[2]} </a>
                        <a href="#"> {categories[3]} </a>
                    </div>
                    <CartWidget />
                </nav>
            </header>
        </>
    )
}
export default Navbar