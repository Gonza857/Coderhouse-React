import React, { useState, useContext, useEffect } from "react";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import { cartContext } from "../../storage/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ItemDetail({ data }) {
  const { addToCart, cart } = useContext(cartContext);
  const [isInCart, setIsInCart] = useState(false);
  const [noStock, setNoStock] = useState(false);

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

  useEffect(() => {
    let search = cart.find((obj) => obj.id === data.id);
    if (search !== undefined) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
    if (search !== undefined) {
      if (search.quantity === search.rating.count) {
        setNoStock(true);
      }
    }
  }, [cart, data.id]);

  return (
    <ItemDetailContainer>
      <div className="itemDetail-img">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="itemDetail-info">
        <h3 className="itemDeailt-title">{data.title}</h3>
        <p className="itemDetail-category">Categoria: {data.category}</p>
        <p className="itemDetail-description">
          {data.description} <br />
        </p>
        <div className="itemDetail-price">
          <p>Precio: ${data.price}</p>
          <p>Stock: {data.rating.count}</p>
        </div>
        <div className="itemDetail-handleCart">
          {noStock ? (
            <>
              <p className="noStockText">
                No hay más productos disponibles para agregar, revisa tu carro
                de compras.
              </p>
              <Link to="/cart">
                <Button>Ir al carrito</Button>
              </Link>
            </>
          ) : (
            <>
              {isInCart ? (
                <div className="itemIsOnCart">
                  <p>Este elemento ya esta en tu carrito ¿Deseas añadir más?</p>
                  <Button
                    fn={() => {
                      setIsInCart(false);
                    }}
                  >
                    Deseo añadir más
                  </Button>
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
    </ItemDetailContainer>
  );
}

export default ItemDetail;

const ItemDetailContainer = styled.div`
  margin-top: 50px;
  padding: 5px;
  height: 350px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: 0.5px solid #c7c7c7;
  .itemDetail-img {
    width: 50%;
    height: 100%;
    padding: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .itemDetail-info {
    border-left: 0.5px solid #c7c7c7;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .itemDeailt-title {
      text-align: center;
      padding: 0px 20px;
    }
    .itemDetail-category {
      text-align: center;
    }
    .itemDetail-description {
      text-align: center;
      padding: 0 15px;
      font-size: 13px;
    }
    .itemDetail-price {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    .itemDetail-handleCart {
      display: grid;
      justify-items: center;
      .noStockText {
        text-align: center;
        border: 3px solid red;
        padding: 10px 0px;
        margin-bottom: 10px;
      }
      .itemIsOnCart {
        display: flex;
        flex-direction: column;
        gap: 10px;
        p {
          text-align: center;
        }
      }
      .itemDetail-counter {
        display: grid;
        justify-content: center;
      }
    }
  }
`;
