import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.svg";

const Navbar = () => {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="Logo" className="img" />
        <nav className="navbar">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
