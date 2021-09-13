
import React, { Component } from 'react'
import './Cards.css'
import Card from '../Card/Card';


class Cards extends Component {
    constructor(){
        super()
        this.state = {
            peliculas:[],
            viewMore: false,
            text: "ver mas",
            cargando: true, 
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
                cargando: true,
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

     cargando() {
         if (this.state.cargando){
             this.setState({
                 cargando: true,
                 text: "Cargando..."
                 
             })
         }
         else{
             this.setState({
                 cargando: false,
                 text: "",
             })
         }
     }
    render(){ 
       
    return (
        <main className="contenedor">

                <section className="aditional-info" >
               {  this.state.peliculas.map(pelicula =>(
                <Card key={pelicula.id}
               datosPelicula={pelicula}
               borrar={(peliculaBorrar) => this.borrarTarjeta(peliculaBorrar)}
                // {this.state.cargando === flase ? (
                //     <p>Cargando...</p>
                // ):}
               />
        ) ) }
                </section>
                      
        </main>
    );
}
}

export default Cards;

