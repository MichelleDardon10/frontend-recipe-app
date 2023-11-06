import React, { useState, useEffect } from 'react';
import App from '../App'; 

function Vegetariano() {
  const apiURL = "http://localhost:5001/categories?category=Vegetariano"; // URL específica para la página de Vegetariano

  return (
      <App apiURL={apiURL} />
  );
}

export default Vegetariano;