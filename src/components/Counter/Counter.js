import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import "./counter.css";
import { cartContext } from "../../storage/CartContext";
import Swal from "sweetalert2";

const HandleCartButton = styled.button`
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: none;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 100px;
  padding: 5px 10px;
`;

function Counter({ stock, handleCart, item }) {
  const [counter, setCounter] = useState(1);
  const { cart } = useContext(cartContext);

  // Funcion para buscar si este item esta en el carrito
  function searchThisItemInCart() {
    let search = cart.find((producto) => producto.id == item.id);
    return search;
  }

  /* FUNCION PARA SUMAR AL CARRITO EL PRODUCTO
  Si el counter es igual  a la cantidad de stock, devuelve alerta y no suma más.
  Sino revisa que la cantidad agregegada no sea mayor al stock. Si es true, evalua nuevamente que la cantidad que estemos agregando no sea mayor la la diferencia de stock disponible. Si hay 10 de stock y ya agregamos 5, no nos permite agregar más de 5 unidades. Devuelve alerta para no agregar más
  Si el counter es menor a esa diferencia, sigue sumando.
  */
  const handleSumar = () => {
    let searchItem = searchThisItemInCart();
    if (searchItem === undefined) {
      if (stock === counter) {
        Swal.fire({
          icon: "error",
          title: "No hay más stock disponible para agregar al carrito",
        });
        return;
      }
      setCounter(counter + 1);
    } else {
      if (searchItem.quantity < stock) {
        if (counter === stock - searchItem.quantity) {
          Swal.fire({
            icon: "error",
            title: `No podes agregar más de ${counter} porque en tu carrito ya agregaste este producto.`,
          });
        } else {
          setCounter(counter + 1);
        }
      }
    }
  };

  // Funcion para restar del contaador, no puede  bajar de 1, para que o se agregue 0 productos.
  const handleRestar = () => {
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-handler">
        <Button counterBtn={true} fn={handleRestar}>
          -
        </Button>
        <p className="counter-text">{counter}</p>
        <Button counterBtn={true} fn={handleSumar}>
          +
        </Button>
      </div>
      <HandleCartButton
        onClick={() => {
          handleCart(counter);
        }}
      >
        Agregar al carrito
      </HandleCartButton>
    </div>
  );
}

export default Counter;
