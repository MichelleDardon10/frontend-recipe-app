import Home from './Home'
import React from 'react'
import '../botones.css';
import { Link } from 'react-router-dom';
import estrella from '../estrella.png';
import calendario from '../calendario.png';

function Pages() {
  return (
    <div className="page-container">

      <div className="button-container">
        <Link to="/sesion" className="person-button">
          Iniciar Sesión
        </Link>
      </div>

      <div className="container">
        <Home />
      </div>

      <div className="calendario-button">
        <Link to="/destacado" className="boton-calendario">
          <img src={estrella} alt="Calendario" />
        </Link>
      </div>
      
      <div className="agregar-recetas-button"> {/* Agrega una nueva clase para el botón de agregar recetas */}
        <Link to="/calendario" className="boton-agregar-recetas">
          <img src={calendario} alt="Agregar Recetas" />
        </Link>
      </div>
    </div>
  );
}

export default Pages