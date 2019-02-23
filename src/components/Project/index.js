import React, { Component } from 'react';
import {  projects } from '../data/project.json'

class Project extends Component {


    constructor() {
        super();
        this.state = {
            projects
        }
    }

    render(){

        const projects = this.state.projects.map((proyectos, i) => {
                            
            return(
                <div className="proyectos">
                <h2 className="display-4 mt-3">{ proyectos.nombre }</h2>
                <img className="img-fluid w-75 p-3" src={proyectos.imagenurl}/>
                <p className="lead mt-2">{ proyectos.descripcion }</p>
                <a href={ proyectos.url } className="btn btn-secondary btn-lg mb-3" role="button" aria-disabled="true">Visitar</a>
                
            </div>
            );
        });

        return(
            <div className="Project">
           { projects }
            
        </div>
        );

    }



}
export default Project;
