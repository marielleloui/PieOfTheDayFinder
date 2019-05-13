import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pies from './containers/Pies/Pies';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>PIE OF THE DAY</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Pies />
      </div>

    );
  }
}

export default App;