import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from "./assets/pokem.jpeg"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
        <h1>Pokemon</h1>

        <p className='parrafo'>Proyecto utilizando la poke api que te teletransporta a tu infancia recordando los pokemons que veias de pequeño y con un pequeño juego para adivinarlos​</p>
        <p className='parrafo'>El juego utiliza especificamente las dos primeras generaciones para recordar esos pokemons que veias de niño</p>
        <img className='img-poke' src={img} alt="imagen pokemon" />
    </>
  )
}

export default App
