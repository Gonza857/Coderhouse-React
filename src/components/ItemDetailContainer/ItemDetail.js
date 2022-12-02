import React, { useState, useContext, useEffect } from "react";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import { cartContext } from "../../storage/CartContext";
import "./itemDetail.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function ItemDetail({ data }) {
  const { addToCart, cart } = useContext(cartContext);
  const [isInCart, setIsInCart] = useState(false);
  const [noStock, setNoStock] = useState(false);

  function noStockAvaible() {
    let search = cart.find((obj) => obj.id === data.id);
    if (search !== undefined) {
      if (search.quantity == search.rating.count) {
        setNoStock(true);
      }
    }
  }

  function onAddToCart(count) {
    // Si se esta queriendo agregar más de lo que hay al carrito, alerta
    // Si no esta en el carrito, que pueda agregar todo el stock
    // Si ya esta en el carrito, que no puedo agregar más de lo que hay
    const itemParaCart = {
      ...data,
      quantity: count,
    };
    addToCart(itemParaCart);
    setIsInCart(true);
    Swal.fire({
      icon: "success",
      title: "El producto fue agregado al carrito",
    });
  }

  function getThisProductQuantity() {
    let search = cart.find((objeto) => (objeto.id = data.id));
    console.log(search);
  }

  function isItemInCart() {
    console.log(cart);
    let search = cart.find((obj) => obj.id === data.id);
    if (search !== undefined) {
      console.log("ItemDetail -> Ya estaba en el carrito");
      setIsInCart(true);
    } else {
      console.log("ItemDetail -> No esta en el carrito", data);
      setIsInCart(false);
    }
  }

  useEffect(() => {
    console.log("El titulo del producto es ", data.title);
    console.log("El ID del producto es ", data.id);
    isItemInCart();
  }, []);

  useEffect(() => {
    noStockAvaible();
  }, [cart]);

  return (
    <div className="itemDetail-container">
      <div className="itemDetail-img">
        <img src={data.image} />
      </div>
      <div className="itemDetail-info">
        <h3 className="itemDetail-info_title">{data.title}</h3>
        <p className="itemDetail-info_category">Categoria: {data.category}</p>
        <p className="itemDetail-info_description">
          {data.description} <br />
        </p>
        <div className="itemDetail-info-price">
          <p className="itemDetail-info_p1">Precio: ${data.price}</p>
          <p className="itemDetail-info_p2">Stock: {data.rating.count}</p>
        </div>
        <div className="lastBlock">
          {noStock ? (
            <>
              <p className="noStockText">
                No hay más productos disponibles para agregar, revisa tu carro
                de compras.
              </p>
              <Link to="/cart" className="itemDetail-alert-button">
                Ir al carrito
              </Link>
            </>
          ) : (
            <>
              {isInCart ? (
                <div className="itemDetai-alert">
                  <p>Este elemento ya esta en tu carrito ¿Deseas añadir más?</p>
                  <button
                    className="itemDetail-alert-button"
                    onClick={() => {
                      setIsInCart(false);
                    }}
                  >
                    Deseo añadir más
                  </button>
                </div>
              ) : (
                <div className="itemDetail-counter">
                  <Counter
                    stock={data.rating.count}
                    handleCart={onAddToCart}
                    item={data}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

<div className="itemDetail-links">
  <p>Ya hay algo</p>
  <Button>Volver</Button>
  <Button>Ver carrito</Button>
</div>;
