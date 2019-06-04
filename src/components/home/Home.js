import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="Section__Intro">
          <div className="Section__Intro-inner">
            <div className="Section__Intro-content">
              <h1>Motivational Reminders</h1>
              <Link className="Section__Intro-btn_link" to="#Section__Display">
                <button className="Section__Intro-btn">Learn More</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="Section__Display">
          <div className="Section__Display-inner">
            <div className="Section__Display-content">
              <h2>Check It Out!</h2>
            </div>
          </div>
        </section>
        <section className="Section__Signup">
          <div className="Section__Signup-inner">
            <div className="Section__Signup-content">
              <h1>Want To Try Motus? Sign Up Today!</h1>
              <Link className="Section__Signup-btn_link" to="/signup">
                <button className="Section__Signup-btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
