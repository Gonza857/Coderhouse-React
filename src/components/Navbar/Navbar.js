import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <div className="navbar-links">
        <Link to="/category/men's clothing">
          <Button clase="navbar-btn">Hombre</Button>
        </Link>
        <Link to="/category/women's clothing">
          <Button clase="navbar-btn">Mujer</Button>
        </Link>
        <Link to="/category/jewelery">
          <Button clase="navbar-btn">Joyas</Button>
        </Link>
        <Link to="/category/electronics">
          <Button clase="navbar-btn">Electrónica</Button>
        </Link>
      </div>
      {/* <UserAccount>
        <Link to="">Iniciar sesión</Link>
        <Link to="">Registrarse</Link>
      </UserAccount> */}
      <CartWidget />
    </nav>
  );
}

export default Navbar;
