import React from 'react'
import './Header.css'

function Header (){
    return(
        
        <header >
               
               <h4>PelisNet</h4> 
                
                <section>
                    <p>Ordenar ASC/ DESC</p>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                    <form action="">
                        <input type="text" name="search" id="" placeholder="Search"/>
                            <button type="submit"><i className="fas fa-search"/>enviar</button>
                    </form>
                </section>
        </header>
        
    );
}

export default Header;