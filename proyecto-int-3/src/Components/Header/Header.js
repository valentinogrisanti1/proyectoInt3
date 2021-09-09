import React from 'react'
import './Header.css'

function Header (){
    return(
        <header >
                <h1>PelisNet</h1>
                <section className="barra-superior">
                    <p>Ordenar ASC/ DESC</p>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                    <form action="">
                        <input className="barraBuscar" type="text" name="search" id="" placeholder="Search"/>
                            <button id="boton" type="submit"><i className="fas fa-search"/></button>
                    </form>
                </section>
        </header> 
    );
}

export default Header;