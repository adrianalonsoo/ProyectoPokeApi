import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Pokemon.css";
import usePokemones from "./usePokemons";

function Pokemon({id,nombre,imagen}){
    
    return(
        <div className="pokemon-card">
             <img src={imagen} alt={nombre} className="pokemon-img"></img>
             <p className="pokemon-titulo">
                <span>#{id}</span>
                <span>{nombre}</span>
             </p>
             <Link to={'/detalle/'+id}>
                <p>Detalle</p>
            </Link>
         </div>
    )
}


function Pokemons(){
    const {pokemons,maspokemons} = usePokemones();


    return (
        <>
            <section className="pokemon-container">
                
                {pokemons.map(pokemon => <Pokemon {...pokemon} key={pokemon.id}/>)}
            </section>
            <button onClick={maspokemons}>CargarMas</button>
        
        </>
       
    )

}




export default Pokemons;