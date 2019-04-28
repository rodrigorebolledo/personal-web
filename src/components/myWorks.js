import React from 'react';
import Work from './work';
const MyWorks = () => {
    return (
        <div className="container mt-5" id="MyWorks">
            <h1 className="display-4">Mis trabajos</h1>
            <div className="d-flex justify-content-between flex-wrap align-items-center mt-5">
            <Work imagen = "/assets/img/urban.jpg" titulo = "Urban Dreams" descripcion = "Sitio web desarrollado en el CMS WordPress para la empresa de producción audiovisual UrbanDreams." link = "https://www.urbandreams.cl/" categoria = "WordPress"/>
            <Work imagen = "/assets/img/perris.jpg" titulo = "Mis Perris" descripcion = "Sitio web desarrollado con el framework Django para la asignatura Desarrollo de Software." link = "https://gitlab.com/rrebolledor/mis-perris" categoria = "Django" />
            <Work imagen = "/assets/img/personal.png" titulo = "Mi web" descripcion = "Pagina web desarrollada con la librería React. La idea de esta pagina es poder compartir mis proyectos e información de contacto." link = "https://github.com/rodrigorebolledo/personal-web" categoria = "React"/>
            </div>
            <button type="button" class="btn btn-secondary mt-5">Ver Más</button>
        </div>
    )
}

export default MyWorks;