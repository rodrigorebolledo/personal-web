import React, { Component } from 'react';
import './css/App.css';
import Menu from './Menu'
import AboutMe from './AboutMe'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu titulo = "rrDev" m1 = "Inicio" m2="Proyectos"/>
          <div className="container">
                <AboutMe nombre = "Rodrigo Rebolledo" descripcion = "Estudiante de ingeniería informática" 
                tecnologia1 = "Python - Django" tecnologia2 = "JS - React" tecnologia3 = "SQL - Oracle" social1 = "LinkedIn"
                social2 = "Twitter"/>
          </div>
      </div>
    );
  }
}

export default App;
