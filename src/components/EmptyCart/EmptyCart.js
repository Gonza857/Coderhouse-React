import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styled from "styled-components";

const EmptyCartContainer = styled.div`
  width: 50%;
  margin: auto;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  .cartEmptyText {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h5 {
      font-size: 25px;
    }
    a {
      margin: auto;
      button {
        border: none;
        border-radius: 10px;
        background-color: rgb(15, 15, 73);
        color: #fff;
        padding: 8px 15px;
        margin: auto;
      }
    }
  }
  .cartEmptyRedirect {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h5 {
      text-align: center;
      font-size: 25px;
    }
    div {
      display: flex;
      gap: 25px;
    }
  }
`;

function EmptyCart() {
  return (
    <EmptyCartContainer>
      <div className="cartEmptyText">
        <h5>Tu carrito esta vacio</h5>
        <Link to="/">
          <Button>Ir a inicio</Button>
        </Link>
      </div>
      <div className="cartEmptyRedirect">
        <h5>Ver por categorias</h5>
        <div>
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
        </div>
      </div>
    </EmptyCartContainer>
  );
}

export default EmptyCart;
