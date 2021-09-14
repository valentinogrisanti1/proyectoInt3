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
               
               <h4 className="titulo">PelisNet</h4> 
            
                
                <section>
                    <p>Ordenar ASC/ DESC</p>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                    <form action="" onSubmit={(evento)=>this.evitarSubmit(evento)}>
                        <input type="text" name="search" id="" placeholder="Search" onChange={(evento)=>this.controlarCambio(evento)} value={`${this.state.valor}`}/>
                            <button type="submit"><i className="fas fa-search"/>enviar</button>
                    </form>
                </section>
        </header>
        
    );
}}

export default Header;