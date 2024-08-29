import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


  return (

    <header>
        <h1>Mars, Leds para Horticultura</h1>

        <nav>
            <ul>
                <li>Led Cree</li>
                <li>Cob</li>
                <li>Full Spectrum</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar