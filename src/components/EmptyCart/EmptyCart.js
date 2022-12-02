import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function EmptyCart() {
  return (
    <>
      <h4>Tu carrito esta vacio</h4>
      <Link to="/">
        <Button clase="itemDetail-alert-button">Ir a inicio</Button>
      </Link>
      <h5>Ver por categorias</h5>
      <Link to="/category/women's clothing">
        <Button clase="itemDetail-alert-button">Mujer</Button>
      </Link>
      <Link to="/category/men's clothing">
        <Button clase="itemDetail-alert-button">Hombre</Button>
      </Link>
      <Link to="/category/electronics">
        <Button clase="itemDetail-alert-button">Electronica</Button>
      </Link>
      <Link to="/category/jewelery">
        <Button clase="itemDetail-alert-button">Joyas</Button>
      </Link>
    </>
  );
}

export default EmptyCart;
