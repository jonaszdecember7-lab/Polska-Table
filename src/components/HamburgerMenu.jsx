import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {
                !isOpen && (
                    <img
                        src="/icon-hamburger.svg"
                        alt="Open menu"
                        className="menu-icon"
                        role="button"
                        tabIndex={0}
                        onClick={() => setIsOpen(true)}
                    />
                )
            }
            {isOpen && (<div className="mobile-menu">
                <img src="/icon-close.svg" alt="menu-close" role="button"
                    tabIndex={0} onClick={() => setIsOpen(false)}
                    className="menu-icon close-menu" />
                <nav className="mobile-nav">
                    <NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to='/menu' onClick={() => setIsOpen(false)}>Menu</NavLink>
                    <NavLink to='/about-us' onClick={() => setIsOpen(false)}>About Us</NavLink>
                    <NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact Us</NavLink>
                </nav >
            </div>)}

        </>)
}

