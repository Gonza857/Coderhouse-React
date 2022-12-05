import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import "./cartDisplay.css";
import { cartContext } from "../../storage/CartContext.js";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./cartDisplay.css";
import EmptyCart from "../EmptyCart/EmptyCart";

const BuyCart = styled.main`
  border: 3px solid blue;
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;

function CartDisplay() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/cart");
  }, [navigate]);

  const {
    cart,
    totalCartPrice,
    clearCart,
    deleteAllUnits,
    deleteSingleProduct,
    isCartEmpty,
    addSingleProduct,
  } = useContext(cartContext);

  return (
    <BuyCart>
      {isCartEmpty ? (
        <>
          <EmptyCart />
        </>
      ) : (
        <>
          <h4>Tu carrito</h4>
          <button
            onClick={() => {
              clearCart();
            }}
          >
            Vaciar carrito
          </button>
          <div className="cartItems">
            {cart.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <div className="product-image-container">
                    <img src={item.image} className="product-image" alt="img" />
                  </div>
                  <div className="product-details">
                    <p>{item.title}</p>
                    <div className="product-quantity">
                      <p>Unidades: {item.quantity}</p>
                      <FontAwesomeIcon
                        onClick={() => {
                          deleteSingleProduct(item);
                        }}
                        className="product-control-quantity"
                        icon={faMinus}
                      />
                      <FontAwesomeIcon
                        onClick={() => {
                          addSingleProduct(item);
                        }}
                        className="product-control-quantity"
                        icon={faPlus}
                      />
                    </div>
                    <p>Precio total: ${item.quantity * item.price}</p>
                  </div>
                  {/*renderizar condicionalmente dependiendo la cantidad*/}
                  <div className="product-buttons-container">
                    <FontAwesomeIcon
                      onClick={() => {
                        deleteAllUnits(item);
                      }}
                      className="trashIcon"
                      icon={faTrash}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p>Subtotal: ${totalCartPrice()}</p>
          <Link to="/checkout">
            <button>Realizar Compra</button>
          </Link>
        </>
      )}
    </BuyCart>
  );
}

export default CartDisplay;
