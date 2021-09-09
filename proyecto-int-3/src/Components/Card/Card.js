import React from 'react'

 function Card(props) {
   const
    { poster_path, title, overview ,id} = props.datosPelicula;
     
     console.log(props);
    return (
        <article > 
         <h4>{title}</h4>
         <img src={'https://image.tmdb.org/t/p/w342/' + poster_path}/>
         <p>{overview }</p> 
         <a className="ver-mas" href="">Ver más</a> 
        </article>
    )
}
export default Card;
