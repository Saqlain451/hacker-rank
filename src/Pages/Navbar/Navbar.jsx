import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import {GoThreeBars} from 'react-icons/go'
import { useGlobalHook } from "../../Hooks/Context";
const Navbar = () => {
    const {navToggle,show} = useGlobalHook()
  return (
    <>
      <header className={show? "header show" : "header"}>
        <div className="nav-logo">
          <NavLink to={"/"}>
            <h1>ChampCoder</h1>
            <span></span>
          </NavLink>
        </div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>Product</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <div className="nav-btns">
          <button>For candidates</button>
          <button>Request Demo</button>
          <button>Sign up</button>
          <span onClick={navToggle}><GoThreeBars/></span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
