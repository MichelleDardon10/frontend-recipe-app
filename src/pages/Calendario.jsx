import React from 'react';
import coca from '../coca.jpeg';

function Calendario() {
  const estiloTitulo = {
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center',
    padding: '20px', // Ajusta el espacio interno según tus necesidades
  };

  const estiloContenedorImagen = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div>
      <h1 style={estiloTitulo}>Calendario</h1>
      <div style={estiloContenedorImagen}>
        <img style={{ maxWidth: '70%' }} src={coca} alt="Descripción de la imagen" />
      </div>
    </div>
  );
}

export default Calendario;
