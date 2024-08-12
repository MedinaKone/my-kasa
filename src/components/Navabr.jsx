import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.svg"

const Navbar = () => {
    return (
        <div className="banner">
            <header>
        <img src={logo} alt="Logo" />
        <nav className="navbar">
            <ul>
            <li>
              Accueil</li>
              
            <li>
           A propos</li>
            </ul>
        </nav>
        </header>
      </div>
       
    );
}

export default Navbar;
