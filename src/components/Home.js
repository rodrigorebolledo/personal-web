import React, { Component } from 'react';
import AboutMe from './AboutMe'


class Home extends Component {


  render() {
    return (
      <div className="Home">
                <AboutMe nombre = "Rodrigo Rebolledo" descripcion = "Estudiante de ingeniería informática" 
                tecnologia1 = "Python - Django" tecnologia2 = "JS - React" tecnologia3 = "SQL - Oracle" social1 = "LinkedIn"
                social2 = "Twitter"/>
      </div>
    );
  }
}

export default Home;
