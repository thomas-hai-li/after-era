import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo1.png';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <img src={logo} alt="logo" height='100' draggable='false' />
      </div>
      <div className="Navbar-search">
        <input type="search" placeholder='search (ie. Rugrats)' />
      </div>
      <div className="Navbar-links">
        <NavLink className="Navbar-link" exact to="/">home</NavLink>
        <NavLink className="Navbar-link" to="/explore">explore all</NavLink>
        <NavLink className="Navbar-link" to="/help">help</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
