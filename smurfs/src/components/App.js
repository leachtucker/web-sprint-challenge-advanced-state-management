import React, { Component } from "react";
import "./App.css";
import Home from './Home';
import Profile from './Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route path="/profile/:id">
                  <Profile />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
