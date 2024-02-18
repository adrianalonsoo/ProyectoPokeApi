import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./DetallePokemon.css";

export default function DetallePokemon() {
    const [detallePokemon, setDetallePokemon] = useState(null);
    const { id } = useParams();
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(datosPokemon => {
                setDetallePokemon(datosPokemon);
                console.log(datosPokemon)
                setTipos(tipos.concat(datosPokemon.types));
            });
    }, [id]);

    useEffect(() => {
        if (detallePokemon) {
            fetch(detallePokemon.species.url)
                .then(response => response.json())
                .then(datosPokemon => {
                    
                });
        }
    }, [detallePokemon]);

    return (
        <section className="detalle-container">
            <h2>Detalle Pokemon</h2>
            <div className="btn-group">
                <button><Link to="/pokemon"><span className="nav-link">Volver</span></Link></button>
            </div>
            {detallePokemon && (
                <div className="detalle-content">
                    <div >
                        <img className='pokemon-img' src={detallePokemon.sprites.other.showdown.front_default} alt={detallePokemon.name} />
                        <img className='pokemon-img' src={detallePokemon.sprites.other.showdown.back_default} alt={detallePokemon.name} />
                    </div>
                    <div>
                        <p className='parrafo'>ID: {detallePokemon.id}</p>
                        <p className='parrafo'>Nombre: {detallePokemon.name}</p>
                        <p className='parrafo'>Stats:</p>
                        
                        <ul>
                            {detallePokemon.stats.map(stat => (
                                <p className='parrafo' key={stat.stat.name}>{stat.stat.name} {stat.base_stat}</p>
                            ))}
                        </ul>
                    </div>
                    <div>
                    <h3>Tipos</h3>
                    
                    {
                        tipos.map((tipo) =>
                            <p className='parrafo' key={tipo.type.name}>{tipo.type.name}</p>
                        )
                    }
                    
                        
                    </div>
                </div>
            )}
        </section>
    );
}