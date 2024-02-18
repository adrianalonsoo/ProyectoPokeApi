import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Pokemon from './Pokemon.jsx' ;
import Navegacion from './Navegacion.jsx';
import DetallePokemon from './DetallePokemon.jsx';
import Juego from "./Juego.jsx";
import Login from './Login.jsx';
import Register from './Registro.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:
    <>
    
    <Navegacion></Navegacion>
    <App></App>
    
    </> ,
    errorElement:<h1> Ruta no valida</h1>
  },
  {
    path: "pokemon",
    element: 
    <>
    <Navegacion></Navegacion>

    <Pokemon></Pokemon> 
    

    </>
  },
  {
    path: "/detalle/:id",
    element: 
    <>
    <Navegacion></Navegacion>
    
    <DetallePokemon></DetallePokemon>

    </>
  },
  {
    path: "/juego",
    element: 
    <>
    <Navegacion></Navegacion>
    <Juego></Juego>

    </>
  },
  {
    path: "/login",
    element: 
    <>
    <Navegacion></Navegacion>
    <Login></Login>

    </>
  },
  {
    path: "/register",
    element: 
    <>
    <Navegacion></Navegacion>

    <Register></Register>
    </>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
