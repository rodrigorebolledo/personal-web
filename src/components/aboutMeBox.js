import React from 'react';




const AboutMeBox = () => (
<div>


<div className="card card-cascade wider reverse" id="Home">


  <div className="view view-cascade overlay">
    <img className="card-img-top" src="\assets\img\fondo.png" alt="Card image cap"/>
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>


  <div className="card-body card-body-cascade text-center">


    <h4 className="card-title"><strong>Rodrigo Rebolledo</strong></h4>

    <h6 className="font-weight-bold indigo-text py-2">Ingeniero Informático</h6>

    <p className="card-text">
    Desde mi infancia estuve ligado a la informática y siempre con preferencia por el área web. Desde
los 13 años creaba sitios al estilo Hello World con colores y tipografías que intentaban imitar el
estilo hacker que se podía ver en películas y series. Pasados los años tomé la decisión de estudiar
ingeniería informática, tuve diferentes asignaturas donde aprendí diversos lenguajes de
programación, entre ellos: Java, C# y Python. Dado que yo arrastraba el gusto por el área web me
encante por Python y su framework Django, ya que me permitía de manera sencilla lograr grandes
resultados.
Me considero un apasionado por la informática, el ejercicio físico, las buenas series/películas y el
café.
    </p>


    <a href="https://www.linkedin.com/in/rrdev/" className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>

    <a href="https://twitter.com/_rrdev" className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>


  </div>

</div>


</div>
)

export default AboutMeBox;