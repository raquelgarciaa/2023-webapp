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
  );
}
const ListaItem = (props:any) =>{
  return <li key={props.indice}> {props.titulo}</li>

}

const List = () =>{
  const tarefas = [
    "Baixar aaa",
    "Baixar bbb",
    "Baixar ccc"
  ];
  return(
    <div className="card">
      <ul> 
        {tarefas.map((item, ind) => 
        <ListaItem indice={ind} titulo={item} />)
        }
      
      </ul>
      <ul>
      <li key={0}> {tarefas[0]}</li>
      <li key={1}> {tarefas[1]}</li>
      </ul>
    </div>

  );
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
        <List></List>
      </div>

    </>
  )
}

export default App
