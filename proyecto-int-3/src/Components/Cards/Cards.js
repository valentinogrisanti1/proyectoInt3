import React, { Component } from 'react'
import './Cards.css'
import Card from '../Card/Card';
import Header from '../Header/Header';


class Cards extends Component {
    constructor(){
        super()
        this.state = {
            peliculas:[],
            viewMore: false,
            text: "ver mas",
            peliculasIniciales: [],
            pagina: 1,
           cargando: false,
           cambiarOrientacion: false,
           text:'fas fa-align-justify',
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
                peliculas: data.results,
                peliculasIniciales: data.results,
                pagina: 2,
            }) 
        })
     }
     
     borrarTarjeta(peliculaBorrar){
         let peliculasQueQuedan = this.state.peliculas.filter(pelicula => pelicula.id !== peliculaBorrar);
         this.setState({
             peliculas: peliculasQueQuedan,
             peliculasIniciales: peliculasQueQuedan,
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
// ORIENTACION 
     cambiarOrientacion(){
         if(this.state.cambiarOrientacion){
             this.setState({
                 text: 'fas fa-align-justify',
                cambiarOrientacion: false, 
             })
         } else{
             this.setState({
                 text: 'fas fa-th',
                 cambiarOrientacion: true
             })
         }
     }
     filtrarPeliculas(peliculaBuscada){
        let peliculasQueQuedan = this.state.peliculasIniciales.filter(pelicula => pelicula.title.toLowerCase().includes(peliculaBuscada.toLowerCase()));
        this.setState({
            peliculas: peliculasQueQuedan,
        })
     }
     agregarPelicula(){
        const url= 'https://api.themoviedb.org/3/movie/top_rated?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES&page='+ this.state.pagina
        console.log(url);
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);
            this.setState( {
                cargando: true,
                peliculas: this.state.peliculas.concat(data.results),
                peliculasIniciales: this.state.peliculasIniciales.concat(data.results),
                pagina: this.state.pagina+1

            }) 
        })
     }
    

     render(){
   
       
    return (
        <React.Fragment>
        <Header filtrarPeliculas={(peliculaBuscada)=>this.filtrarPeliculas(peliculaBuscada)}/>

        <main className="contenedor">
       <section>
        <h1 className="populares"> PELICULAS POPULARES</h1></section>
{/* ORIENTACION */}
        <div className="contenedorBotenes"><i type="button" id="botones"  onClick={() => this.cambiarOrientacion()} className={this.state.text}></i></div>
       
        {this.state.cargando ? (
             this.state.peliculas.length !== 0? (

                <section className= {`${this.state.cambiarOrientacion ? 'columna' : 'fila'}`} >
                    
                    
                     
                        {  this.state.peliculas.map(pelicula =>(
                         <Card key={pelicula.id} datosPelicula={pelicula} borrar={(peliculaBorrar) => this.borrarTarjeta(peliculaBorrar)} />
                        
                 ) ) }
                         </section>):(
         
                             
                             <h2 className="sin-resultados">No hay resultados...</h2>
                         )
        ):(
            <h2 className="sin-resultados">Cargando...</h2>
        )} 
        
                
            
                <button onClick ={()=> this.agregarPelicula()} className="buscador">AGREGAR PELICULAS</button>
        </main>
        </React.Fragment>
    );
}
}

export default Cards;

