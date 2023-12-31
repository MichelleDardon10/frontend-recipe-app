import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import Components para establecer paths para links
import Ensaladas from './components/Ensaladas';
import Postres from './components/Postres';
import Popular from './components/Popular';
import Pollos from './components/Pollos';
import Carnes from './components/Carnes';
import Vegetariano from './components/Vegetariano';
import Mariscos from './components/Mariscos';
import Bebidas from './components/Bebidas';

//import Pages
import Calendario from './pages/Calendario';
import Sesion from './pages/Sesion';
import Destacado from './pages/Destacado';


//import libreria Router para uso de pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GenericPage from './pages/GenericPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/ensaladas",
    element: <Ensaladas />,
  },
  {
    path: "/postres",
    element: <Postres/>,
  },
  {
    path: "/popular",
    element: <Popular/>,
  },
  {
    path: "/pollos",
    element: <Pollos/>,
  },
  {
    path: "/carnes",
    element: <Carnes/>,
  },
  {
    path: "/vegetariano",
    element: <Vegetariano/>,
  },
  {
    path: "/mariscos",
    element: <Mariscos/>,
  },
  {
    path: "/bebidas",
    element: <Bebidas/>,
  },
  {
    path: "/sesion",
    element: <Sesion/>,
  },
  {
    path: "/destacado",
    element: <Destacado/>,
  },
  {
    path: "/calendario",
    element: <Calendario/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
