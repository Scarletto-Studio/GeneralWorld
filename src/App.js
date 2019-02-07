import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    );
  }
}

export default App;
