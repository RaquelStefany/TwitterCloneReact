import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Tweet } from './components/Tweet'
import { Menu } from './components/Menu'
import { Assuntos } from './components/Assuntos'

function App() {
  return (
    <div>
        <Menu />
        <div className='paginaInicial'>
          <h1>
            Página Inicial
          </h1>
          <Tweet />
        </div>
        <Assuntos />
    </div>
  )
}

export default App
