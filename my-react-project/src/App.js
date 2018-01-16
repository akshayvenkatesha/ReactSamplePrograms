import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import data from './Data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu recipes={data} />
      </div>
    );
  }
}

export default App;
