import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo.svg"

function Navbar({ onOrderClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu open/close state:
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close the menu when a link is clicked:
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        {/* Logo */}
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={Logo} alt="Amazing Food Company Logo" />
          </NavLink>
        </div>

        {/* Hamburger Menu - Visible on Mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/products"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <button
              className="order-button-nav"
              onClick={() => {
                onOrderClick();
                closeMenu();
              }}
            >
              Order Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
