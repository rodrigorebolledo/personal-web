import React from 'react';

var star = {
    maxWidth: '20px'
}

var cardStyle = {
    width: '18rem',
    margin: '10px auto'
    
}




const Software = ({ source, cant_estrellas ,titulo, texto }) => {

  const estrellas = nstars =>{
    var stars = []
    for (let i = 0 ; i< nstars ; i++){
      stars.push(<img src="http://pngimg.com/uploads/star/star_PNG1596.png" style={ star }/>)
    }
    return stars;
  }


    return(
  <div className="mt-3" style={ cardStyle }>
<div class="card card-cascade wider">

<div class="view view-cascade overlay">
  <img  class="card-img-top" src={source} alt="Card image cap"/>
  <a href="#!">
    <div class="mask rgba-white-slight"></div>
  </a>
</div>


<div class="card-body card-body-cascade text-center">

  <h4 class="card-title"><strong>{titulo}</strong></h4>
 
  {estrellas(cant_estrellas)}

  <p class="card-text">{ texto }</p>


</div>

</div>
  </div>
    )
}

export default Software;