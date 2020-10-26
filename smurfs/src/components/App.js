import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title is-3 heading">The Village:</h1>
          <SmurfList />
        </div>
        <div className="container">
          <SmurfForm />
        </div>
      </div>
    );
  }
}

export default App;
