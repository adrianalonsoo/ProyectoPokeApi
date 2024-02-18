

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import  {FirebaseConf} from './firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import logo from "./assets/poke.png";

const Navegacion = () => {

  const [isLogged, setIsLogged] = React.useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseConf.auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
    return () => {
      unsubscribe();
    }
  },[])

  const handleLogout = () => {
    FirebaseConf.auth.signOut() 
      .then(() => {
        
        console.log('Se ha cerrado sesion');
    
      })
      .catch((error) => {
        
        console.error('Error', error.message);
      });
  };

  return (
    
      <nav>
        <div>
        
                <img src={logo} alt="logo pokemon" />
                <Link to="/">Inicio </Link>
        
            
                <Link to="/pokemon">Pokemons </Link>
            
                
            {!isLogged ? (
              <>
                
                  <Link  to="/login">Iniciar Sesión </Link>
               
               
                  <Link  to="/register">Registro </Link>
               
              </>
            ) : 
            <div>
              <Link  to="/juego">Juego </Link>
            </div>}
        
          {isLogged ? (
            <button onClick={handleLogout}>Cerrar Sesión</button>
          ) : null}
          
        </div>
      </nav>
    
  );
};

export default Navegacion;