import React, { useState, useEffect } from 'react';
import App from '../App'; 

function Ensaladas() {
  const apiURL = "http://localhost:5001/categories?category=Ensaladas"; // URL específica para la página de Ensaladas

  return (
      <App apiURL={apiURL} />
  );
}

export default Ensaladas;