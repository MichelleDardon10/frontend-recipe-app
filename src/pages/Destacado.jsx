import React, { useState, useEffect } from 'react';
import App from '../App'

function Destacado() {
  const apiURL = "http://localhost:5001/destacado"; // URL específica para la página de desfigurado

  return (
      <App apiURL={apiURL} />
  );
}

export default Destacado;