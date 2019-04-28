import React from 'react';
const getStyle = img => {
  var cardStyle = {
    width: '18rem',
    margin: '10px auto',
    backgroundImage: 'url('+img+')'
}
  return cardStyle
}



const Work = ({ imagen, titulo, descripcion, link, categoria }) => {
    return (
<div className="card card-image"  style={ getStyle(imagen) }>

<div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
  <div>
    <h5 className="pink-text"><i className="fas fa-chart-pie"> { categoria }</i> </h5>
    <h3 className="card-title pt-2"><strong>{ titulo }</strong></h3>
    <p>{ descripcion }</p>
    <a href={ link } className="btn btn-secondary"><i className="fas fa-clone left"></i> Ver proyecto</a>
  </div>
</div>

</div>
    )
}

export default Work;