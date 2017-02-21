import React, { Component } from 'react';
import UserEntry from './UserEntry.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserEntry />
      </div>
    );
  }
}

export default App;
