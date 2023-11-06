import React, { useState, useEffect } from 'react';
import App from '../App'; 

function Bebidas() {
  const apiURL = "http://localhost:5001/categories?category=Bebidas"; // URL específica para la página de bebidas

  return (
      <App apiURL={apiURL} />
  );
}

export default Bebidas;