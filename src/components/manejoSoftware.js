import React from 'react';
import Software from './software';




const ManejoSoftware = () => {
    return(
        <div className="container mt-5" id="Habilidades">
            <h1 className="display-4">Habilidades</h1>
            <div className="d-flex justify-content-between flex-wrap align-items-center mt-5">
            <Software source = "/assets/img/react.png" titulo="React" cant_estrellas = "3" texto = ""/>
            <Software source = "/assets/img/django.gif" titulo="Django" cant_estrellas = "5" texto = ""/>
            <Software source = "/assets/img/bd.JPG" titulo="SQL" cant_estrellas = "5" texto = ""/>
            </div>
        </div>
    )
}

export default ManejoSoftware;