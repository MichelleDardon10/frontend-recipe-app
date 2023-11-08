import React, { useState, useEffect } from 'react';
import App from '../App'; 

function Popular() {
  const apiURL = "http://localhost:5001/categories?category=Popular"; // URL específica para la página de Popular

  return (
      <App apiURL={apiURL} />
  );
}

export default Popular;