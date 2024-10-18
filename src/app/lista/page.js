'use client'
import { useState, useEffect } from 'react'
import "./style.css"


export default function Lista() {
  const [lista, setLista] = useState(['Uva', 'Banana'])
  const [itemName, setItemName] = useState('')

  const handleChange = (ev) => {
    setItemName(ev.target.value)
  }

  const handleClick = (ev) => {
    lista.push(itemName)
    setLista([...lista])
    setItemName('')
  }

  useEffect(() => {
    console.log('useEffect vazio')
  }, [])

  useEffect(() => {
    console.log('itemName', itemName)
  }, [itemName])

  useEffect(() => {
    console.log('lista', lista)
  }, [lista])

  return (
    <>
      <h1>Lista de compras</h1>

      <div>
        <input name="item" onChange={handleChange} value={itemName} />
        <button onClick={handleClick}>Adicionar</button>
      </div>

      <h3>Itens</h3>

      <p>Valor de itemName: {itemName}</p>

      <ul>
        {lista.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </>
  );
}
