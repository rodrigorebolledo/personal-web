import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AboutMe extends Component {

  static propTypes = {
    nombre : PropTypes.string.isRequired,
    descripcion : PropTypes.string.isRequired,
    tecnologia1 : PropTypes.string.isRequired,
    tecnologia2 : PropTypes.string.isRequired,
    tecnologia3 : PropTypes.string.isRequired,
    social1 : PropTypes.string.isRequired,
    url1 : PropTypes.string.isRequired,
    social2 : PropTypes.string.isRequired,
    url2: PropTypes.string.isRequired,
  }

    render(){

      const { nombre, descripcion, tecnologia1, tecnologia2, tecnologia3, social1, url1, social2, url2 } = this.props;
        return(
            <div className="row justify-content-center">
            <div className="col mt-4 text-center">  
            <div className="card mx-auto mb-4" style={{width: '20rem'}} >
            <img src="https://scontent.fccp2-1.fna.fbcdn.net/v/t1.0-9/51375859_539174683155983_7731741109113585664_n.jpg?_nc_cat=106&_nc_ht=scontent.fccp2-1.fna&oh=21cd93ba31136a71cf9249cb3df6b474&oe=5CF7C712" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{ nombre }</h5>
              <p className="card-text">{ descripcion }</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{ tecnologia1 }</li>
              <li className="list-group-item">{ tecnologia2 }</li>
              <li className="list-group-item">{ tecnologia3 }</li>
            </ul>
            <div className="card-body">
              <a href={ url1 } className="card-link">{ social1 }</a>
              <a href={ url2 } className="card-link">{ social2 }</a>
            </div>
          </div>
          </div>
          </div>
        );
    }
}

export default AboutMe;