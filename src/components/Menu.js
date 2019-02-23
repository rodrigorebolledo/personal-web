import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
class Menu extends Component {

 static propTypes = {
  titulo : PropTypes.string.isRequired,
  m2 : PropTypes.string.isRequired,
  m3 : PropTypes.string.isRequired,
};



    render(){

      const { titulo, m1, m2 } = this.props;
      const style = {
        "background-color" : "#ff7657",
        "color" : "#FFF"
      }
        return(
            <nav className="navbar navbar-expand-lg  " style = { style }>
            <a className="navbar-brand">{ titulo }</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-light" href = "/" >{ m1 } <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/proyectos">{ m2 }</a>
                </li>
              </ul>
            </div>
          </nav>
        );
    }

  }

export default Menu;