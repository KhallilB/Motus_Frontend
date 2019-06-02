import React, { Component } from 'react';
import '../navbar/Navbar.css';

import { NavLink } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="Navbar">
          {/* Logo */}
          <NavLink className="Navbar__Logo" to="/">
            Motus
          </NavLink>

          {/* List of Nav Links */}
          <ul className="Navbar__Items">
            {/* Sign Up */}
            <li>
              <NavLink className="Navbar__Link" to="/signup">
                Sign Up
              </NavLink>
            </li>
            {/* Log In */}
            <li>
              <NavLink className="Navbar__Link" to="/login">
                Log In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
