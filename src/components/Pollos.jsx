import React, { useState, useEffect } from 'react';
import App from '../App'; 

function Pollos() {
  const apiURL = "http://localhost:5001/categories?category=Pollos"; // URL específica para la página de Pollos

  return (
      <App apiURL={apiURL} />
  );
}

export default Pollos;