import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";

const Componente = () => null;
const Botao = (props: any) => {
  const [count, setCount] = useState(0)
  return(
    <button onClick={() => setCount((count) => count + 1)}>
      {props.titulo}
      {count}
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)
  //     nome variável, função

  const PlusButao = () => {
    setCount(count+1)
  }

  const SubButao = () => {
    setCount(count-1)
  }

  const Zerro = () => {
    setCount(0)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p> {count} </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
  
        <Botao titulo="Incrementar" ></Botao>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
