import React, { Component } from 'react';
import './App.css';
import Events from './components/Events';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Events/>
      </div>
    );
  }
}

export default App;
