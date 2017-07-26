/* 
* Main App component 
*/



import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from './components/partials/MainNavBar';
import Routes from './components/Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNavBar />
          <Routes />
          <p className="App-intro">
            Built with <code>React</code> and <code>NodeJS</code>
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
