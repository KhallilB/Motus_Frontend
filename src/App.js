import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

// Components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Signup from './components/auth/signup/Signup';
import Login from './components/auth/login/Login';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div class="Navbar">
            <Navbar />
          </div>

          {/* Router */}
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
