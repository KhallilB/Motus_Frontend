import React, { Component } from 'react';
import '../navbar/Navbar.css';

import { NavLink, Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div className="container">
        {/* Navbar */}
        <div className="Navbar">
          {/* Logo */}
          <NavLink className="Navbar__Logo" to="/">
            Motus
          </NavLink>

          {/* Nav Links pushed right */}
          <div className="Navbar__Links-right">
            {/* Sign Up */}
            <NavLink className="Navbar__Link" to="/signup">
              Sign Up
            </NavLink>

            {/* Log In */}
            <NavLink className="Navbar__Link" to="/login">
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
