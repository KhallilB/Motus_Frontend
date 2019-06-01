import React, { Component } from 'react';
import '../navbar/Navbar.css';

import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="Navbar">
          <div className="Navbar-link Navbar-logo">
            <NavLink to="/">
              <h1>Motus</h1>
            </NavLink>
          </div>
          {/* <div className="Navbar-link">
            <h3>Reminders</h3>
          </div>
          <div className="Navbar-link">
            <h3>Calender</h3>
          </div> */}
          <div className="Navbar-link">
            <NavLink to="/signup">
              <h3>Sign Up</h3>
            </NavLink>
          </div>
          <div className="Navbar-link">
            <NavLink to="/login">
              <h3>Log In</h3>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
