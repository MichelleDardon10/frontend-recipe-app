import React, { useState, useEffect } from 'react';
import App from '../App'; 

function Postres() {
  const apiURL = "http://localhost:5001/categories?category=Postres"; // URL específica para la página de Postres

  return (
      <App apiURL={apiURL} />
  );
}

export default Postres;