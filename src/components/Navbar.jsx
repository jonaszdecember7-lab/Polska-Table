import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="main-navbar">
            <img src={logo} alt="Polish Restaurant Logo" className="logo" onClick={() => navigate('/')} />
            <div className="links-area">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
            </div>
        </nav>
    );
}
