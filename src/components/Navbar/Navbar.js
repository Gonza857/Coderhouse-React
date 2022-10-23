import React from 'react'
import Button from '../Button/Buttons'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbarMod">
        <Logo/>
        <div className='nabvarBtnBox'>
          <Button text="Autos"/>
          <Button text="Motos"/>
          <Button text="Bicicletas"/>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar