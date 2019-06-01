import React, { Component } from 'react';
import '../navbar/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="Navbar">
          <div class="Navbar-link Navbar-logo">
            <h1>Motus</h1>
          </div>
          {/* <div class="Navbar-link">
            <h3>Reminders</h3>
          </div>
          <div class="Navbar-link">
            <h3>Calender</h3>
          </div> */}
          <div class="Navbar-link">
            <h3>Sign Up</h3>
          </div>
          <div class="Navbar-link">
            <h3>Log In</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
