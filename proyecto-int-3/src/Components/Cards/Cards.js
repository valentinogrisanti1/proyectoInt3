
import React, { Component } from 'react'
import './Cards.css'
import Card from '../Card/Card';


class Cards extends Component {
    constructor(){
        super()
        this.state = {
            peliculas:[],
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
    render(){ 
        this.setState.peliculas.map(pelicula =>(
            <Card key={pelicula.id}
            datosPelicula={pelicula}/>
        ) )
    return (
        <main className="contenedor">
            <img src="./img/image-default.png" alt="" />
                <h3>PelisNet</h3>
                <article >
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                </article>

                {/* <section className="aditional-info"> */}
              {/* <Card/>
              <Card/>
              <Card/>
              <Card/>
                </section> */}
                      
        </main>
    );
}
}

export default Cards;

