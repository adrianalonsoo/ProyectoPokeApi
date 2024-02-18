import { useEffect, useState } from 'react'
const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=8&offset=0'
const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'

function usePokemons() {
  const [pokemons, setpokemons] = useState([])
  const [siguienteUrl, setSiguienteUrl] = useState('')
  const [verMas, setVerMas] = useState(true)

  const fetchPokemon = async (url) => {
    const response = await fetch(url)
    const poke = await response.json()

    const abilities = poke.abilities.map(a => a.ability.name)
    const stats = poke.stats.map(s => { return { name: s.stat.name, base: s.base_stat }})
    const types = poke.types.map(t => t.type.name )

    //Devolvemos todos los atributos de los pokemons
    return {
      id: poke.id,
      nombre: poke.name,
      imagen: poke.sprites.other.dream_world.front_default || poke.sprites.front_default,
      imagenB:poke.sprites.other.dream_world.back_default,
      abilities,
      stats,
      types
    }
  }

  const getpokemons = async (url = URL_DEFAULT) => {
    // Recuperamos el listado de los pokemons
    const response = await fetch(url)
    const listapokemons = await response.json()
    const { next, results } = listapokemons // Guardamos el result
    
    // Ahora por cada result (pokemon), necesitamos obtener la información

    // necesitamos esperar a que se resuelvan todas
    // por eso recurrimos a Primise.all
    const newpokemons = await Promise.all(
      results.map((pokemon )  => fetchPokemon(pokemon.url))
    )

    return { next, newpokemons }
  }

  const obtenerpokemons = async () => {
    const { next, newpokemons } = await getpokemons()
    setpokemons(newpokemons)
    setSiguienteUrl(next)
  }

  const maspokemons = async () => { 
    const { next, newpokemons } = await getpokemons(siguienteUrl)
    setpokemons(prev => [...prev, ...newpokemons])
    next === null && setVerMas(false)
    setSiguienteUrl(next)
  }


  useEffect(() => { obtenerpokemons() }, [])

  return { pokemons, maspokemons, verMas }
}

export default usePokemons