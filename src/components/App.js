import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import Menu from './Menu'
import AboutMe from './AboutMe'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu/>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col mt-4 text-center">
                <AboutMe/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
