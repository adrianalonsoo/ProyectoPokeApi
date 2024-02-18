import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Juego() {
    const navigate = useNavigate();
    const [listaPokemon, setListaPokemons] = useState([]);
    const [pokemonAcertado, setPokemonAcertado] = useState([]);
    const [listaOpciones, setListaOpciones] = useState([]);
    const [puntos, setPuntos] = useState(0);
    const [imagen, setimagen] = useState("#");
    const [ganar, setGanar] = useState(false);
    useEffect(() => cargarPokemons(), []);

    function random() {
        return Math.floor(Math.random() * (251) + 1);
    }

    function cargarPokemons() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=251&offset=0")
            .then((response) => response.json())
            .then((datosApi) => {
                if (listaPokemon.length < 151) {
                    datosApi.results.forEach(element => {
                        setListaPokemons(listaPokemon.push(element));
                    });
                    
                    eligePokemon();
               
                }
            });
    }

    function eligePokemon() {
        let id = random();
        fetch("https://pokeapi.co/api/v2/pokemon/" + listaPokemon[id].name)
            .then((response) => response.json())
            .then((datosApi) => {
                setPokemonAcertado(datosApi);
                
                setimagen(datosApi.sprites.other.dream_world.front_default);
                
                cargarRespuestas(datosApi);
            });
            
    }

    function cargarRespuestas(pokemonCorrect) {
        for (let i = 1; i < 3; i++) {
            setListaOpciones(listaOpciones.push(listaPokemon[random()]));
        }
        setListaOpciones(listaOpciones.push(pokemonCorrect));

        setListaOpciones((listaOpciones));

    }

    

    function startGame() {
        if (ganar == false) {
            setPuntos(puntos);
        }
        setGanar(false);
        setListaPokemons([]);
        setListaOpciones([]);
        cargarPokemons();
    }

    function comprobar(nombre) {
        if (nombre == pokemonAcertado.name) {
            setPuntos(puntos + 1);

            setListaPokemons([]);
            setListaOpciones([]);
            setGanar(true);
        }
    }

    function endGame() {
        let puntuacionesTotales = [];
        puntuacionesTotales = puntuacionesTotales.concat(JSON.parse(localStorage.getItem('puntuacionesTotales')));
        let jugador = prompt('Introduce tu nombre:');

        if (jugador.length > 0) {

            puntuacionesTotales.push({ jugador, puntos });
            console.log(puntuacionesTotales);

            localStorage.setItem('puntuacionesTotales', JSON.stringify(puntuacionesTotales));
            
        }
    }
    return (
        <section>
            <h1>Adivina el Pokemon</h1>
            <div>
                <h3>Puntuacion: {puntos}</h3>
                <div>
                    <button onClick={startGame}>Nuevo Pokemon</button>
                    <button onClick={endGame}>Salir</button>
                </div>
            </div>
            <div>
                <div >
                    <img src={imagen} ></img>
                </div>

                {(ganar) ? <div>
                    <p className='parrafo'>Correcto!</p>
                    </div> :
                    <div>{
                        listaOpciones.map((pokemon) =>
                            <button onClick={() => comprobar(pokemon.name)} key={pokemon.name}><span>{pokemon.name}</span></button>
                        )
                    }

                    </div>}
            </div>
        </section>
    );
}