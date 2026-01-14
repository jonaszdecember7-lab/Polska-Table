import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import HamburgerMenu from './HamburgerMenu.jsx'

export default function Root() {
    
    return (
        <div>
            <Navbar />
            <HamburgerMenu />
            <Outlet />
        </div>
    );
}
