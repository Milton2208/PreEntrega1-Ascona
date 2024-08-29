import React from 'react'
import "./NavBar.css"
import CarWidget from '../CarWidget/CarWidget'

const NavBar = () => {


  return (
    <header>
        <h1>Despensa Irmis</h1>
        <nav>
            <ul>
            <li>Panes</li>
            <li>Golosinas</li>
            <li>Bebidas</li>
            <li>Cigarrillo</li>
            <li>Limpieza</li>
            </ul>
        </nav>

        <CarWidget/>
    </header>
  )
}

export default NavBar