import React, { Component } from 'react';
import AboutMe from './AboutMe'


class Home extends Component {


  render() {
    return (
      <div className="Home">
                <AboutMe nombre = "Rodrigo Rebolledo" descripcion = "Estudiante de ingeniería informática" 
                tecnologia1 = "Python - Django" tecnologia2 = "JS - React" tecnologia3 = "SQL - Oracle" social1 = "LinkedIn"
                url1 = "https://www.linkedin.com/in/rrdev/"
                social2 = "Twitter" url2 = "https://twitter.com/_rrdev"/>
      </div>
    );
  }
}

export default Home;
