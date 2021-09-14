import React, {Component}from 'react'


 class Card extends Component {
   constructor(props){
       super(props);
       this.state = {
           viewMore: false,
           text: "Ver mas",
       }
   }
  
   viewMore(){
    if(this.state.viewMore){
        this.setState({
            viewMore:false,
            text: "Ver mas"
        })
    }
    else{
       this.setState({
           viewMore: true,
           text: "Ver menos"
       })
   }
}
    render(){ 
    return (
        <article > 
          <section className="navigation">
                    <div>
                      <i className="fas fa-chevron-left"></i>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close" id="borrar" onClick={() => this.props.borrar(this.props.datosPelicula.id)} ></i>
         </section>
         <h4>{this.props.datosPelicula.title}</h4>
         <div className="image-contenedor">
         <img className="image" src={'https://image.tmdb.org/t/p/w342/' + this.props.datosPelicula.poster_path}/>
         </div>
         <section className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>
            <p>{this.props.datosPelicula.overview}</p>
            <p>Hola</p>
         </section> 
         <p className="ver-mas" onClick={ ()=> this.viewMore()}> {this.state.text}</p> 
         
        </article>
    )
  }
}

export default Card;
