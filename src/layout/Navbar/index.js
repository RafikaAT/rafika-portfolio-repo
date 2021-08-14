import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <header>
      <h1 class="logo">Logo</h1>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Navbar;
