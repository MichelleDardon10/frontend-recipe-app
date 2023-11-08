import React, { useState, useEffect } from 'react';
import App from '../App'; 

function Carnes() {
  const apiURL = "http://localhost:5001/categories?category=Carnes"; // URL específica para la página de carnes

  return (
      <App apiURL={apiURL} />
  );
}

export default Carnes;