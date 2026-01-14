import { Link, Outlet } from "react-router-dom";

export default function Menu() {


  return (
    <div className="menu-page">
      <div className="menu-info">
        <h1>Menu</h1>
        <p>
          Explore our dishes. For reservations, visit{" "}
          <Link to="/contact">Contact Us</Link>.
        </p>
      </div>

      <nav className="menu-nav">
        <Link to="">Popular</Link>
        <Link to="starters">Starters</Link>
        <Link to="mains">Mains</Link>
        <Link to="drinks">Drinks</Link>
        <Link to="desserts">Desserts</Link>
      </nav>
      <Outlet />
    </div>


  );
}