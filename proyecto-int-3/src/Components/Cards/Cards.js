
import React, { Component } from 'react'
import './Cards.css'
import Card from '../Card/Card';


class Cards extends Component {
    constructor(){
        super()
        this.state = {
            peliculas:[],
            viewMore: false,
            text: "ver mas"
        }
    }
    componentDidMount() {
        const url= 'https://api.themoviedb.org/3/movie/top_rated?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES&page=1'
        console.log(url);
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);
            this.setState( {
                peliculas: data.results
            }) 
        })
     }
     
     borrarTarjeta(peliculaBorrar){
         let peliculasQueQuedan = this.state.peliculas.filter(pelicula => pelicula.id !== peliculaBorrar);
         this.setState({
             peliculas: peliculasQueQuedan,
         })
     }
    render(){ 
       
    return (
        <main className="contenedor">

                <section className="aditional-info" >
               {  this.state.peliculas.map(pelicula =>(
                <Card key={pelicula.id}
               datosPelicula={pelicula}
               borrar={(peliculaBorrar) => this.borrarTarjeta(peliculaBorrar)}/>
        ) ) }
                </section>
                      
        </main>
    );
}
}

export default Cards;

