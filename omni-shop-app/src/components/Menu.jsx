import React from "react";
import { Link } from "react-router-dom";



function Menu(){

    return(
       
       <dic>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand mb-0 h1" href="/">OMNI</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to={'/celulares'} className="nav-link active">Celulares</Link>
                </li>
                <li className="nav-item">
                <Link to={'/juegos'} className="nav-link active">Juegos</Link>
                </li>
                
            </ul>
            
            </div>
        </div>
        </nav>

       </dic>
       
    )
}

export default Menu