import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: ""

        }
    }
    evitarSubmit(evento){
        evento.preventDefault()
    }
    controlarCambio(evento){
        this.setState({
            valor: evento.target.value
        }, ()=>this.props.filtrarPeliculas(this.state.valor))
    }
    render(){
    return(
        
        <header >
               
               
            <img  src='../img/net.png' alt=""></img>
                
                <section className="infoHeader">
                    {/* <p>Ordenar ASC/ DESC</p> */}
                   
                    <form action="" onSubmit={(evento)=>this.evitarSubmit(evento)}>
                    <input className="buscador" type="text" name="search" id="" placeholder="Buscar " onChange={(evento)=>this.controlarCambio(evento)} value={`${this.state.valor}`}/>
                    <button className="botonbuscador"type="submit" ><i />ENVIAR</button>
                    </form>
                </section>
        </header>
        
    );
}}

export default Header;