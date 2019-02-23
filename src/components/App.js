import React, { Component } from 'react';
import './css/App.css';
import Menu from './Menu'
import Content from './Content'

import PropTypes from 'prop-types';


class App extends Component {

  static propTypes = {
    children : PropTypes.object.isRequired,
  }

  render() {
    const { children } = this.props;
    return (
      <div className="App">
          <Menu titulo = "rrDev" m1 = "Inicio" m2="Proyectos"/>
          <div className="container">
          <Content body = {children}/>
          </div>
      </div>
    );
  }
}

export default App;
