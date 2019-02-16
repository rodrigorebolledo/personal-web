import React, { Component } from 'react'


class AboutMe extends Component {

    constructor(){
        super();
        this.state = {
            nombre : 'Rodrigo Rebolledo',
            descripcion : 'Ingeniería informática loading...',
            tecnologia1 : 'Django',
            tecnologia2 : 'React',
            tecnologia3 : 'Sql',
            link1name : 'Facebook',
            link2name : 'Github'

        }
    }

    render(){
        return(
            <div className="card mx-auto" style={{width: '18rem'}} >
            <img src="https://scontent.fccp2-1.fna.fbcdn.net/v/t1.0-9/51375859_539174683155983_7731741109113585664_n.jpg?_nc_cat=106&_nc_ht=scontent.fccp2-1.fna&oh=21cd93ba31136a71cf9249cb3df6b474&oe=5CF7C712" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{this.state.nombre}</h5>
              <p className="card-text">{this.state.descripcion}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.state.tecnologia1}</li>
              <li className="list-group-item">{this.state.tecnologia2}</li>
              <li className="list-group-item">{this.state.tecnologia3}</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">{this.state.link1name}</a>
              <a href="#" className="card-link">{this.state.link2name}</a>
            </div>
          </div>
        );
    }
}

export default AboutMe;