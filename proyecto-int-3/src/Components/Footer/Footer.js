import React from 'react'
import './Footer.css'

function Footer() {
    return (
        
        <footer className="footer">
                <div>
                    <a href="https://www.digitalhouse.com/" target="_blank" rel="noopener noreferrer"><img class="logodh" src="/img/dh-logo.png" alt=""></img>
                    </a>
                    <h2 className="udesa">Alumnos de la Universidad de San Andres</h2>
                </div>
                <div >
                    <a href="https://udesa.edu.ar/" target="_blank" rel="noopener noreferrer"><img class="logudesa" src="/img/logo-udesa.png" alt=""></img>
                    </a>
                    <h2 className="udesa">UDESA</h2>
                </div>
            <div>
             <ul className="team">
                 <h2 className="udesa">Integrantes</h2>
                    <li>Luisa BENGOLEA</li>
                    <li>Valentino GRISANTI</li>
                    <li>Butista LANUSSE</li>
                </ul>
                </div>
        </footer>

    );
}

export default Footer;