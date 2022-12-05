import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../../storage/CartContext.js";
import styled from "styled-components";

function CartItem({ item }) {
  const { deleteAllUnits, deleteSingleProduct, addSingleProduct } =
    useContext(cartContext);

  let allItemsPrice = item.quantity * item.price;
  allItemsPrice = Number(allItemsPrice.toFixed(2));

  return (
    <CartItemContainer key={item.id}>
      <div className="cartItemImg">
        <img src={item.image} className="product-image" alt="Product Image" />
      </div>
      <div className="cartItemDetails">
        <p className="cartItemTitle">{item.title}</p>
        <div className="cartItemQuantityHandler">
          <p>Unidades: {item.quantity}</p>
          <FontAwesomeIcon
            onClick={() => {
              deleteSingleProduct(item);
            }}
            className="cartIitemProductControl"
            icon={faMinus}
          />
          <FontAwesomeIcon
            onClick={() => {
              addSingleProduct(item);
            }}
            className="cartIitemProductControl"
            icon={faPlus}
          />
        </div>
        <p className="cartItemPrice">Precio total: ${allItemsPrice}</p>
      </div>
      <div className="cartItemDeleteHandler">
        <FontAwesomeIcon
          onClick={() => {
            deleteAllUnits(item);
          }}
          className="cartItemDeleteBtn"
          icon={faTrash}
        />
      </div>
    </CartItemContainer>
  );
}

export default CartItem;

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 145px;
  margin: 15px 0;
  padding: 10px;
  border: 0.5px solid #c7c7c7;
  .cartItemImg {
    width: 25%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      margin: auto;
      object-fit: contain;
    }
  }
  .cartItemDetails {
    padding: 0 15px;
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .cartItemTitle {
      font-weight: 600;
    }
    .cartItemQuantityHandler {
      display: flex;
      align-items: center;
      gap: 15px;
      .cartIitemProductControl {
        background-color: #000;
        border-radius: 50%;
        width: fit-content;
        padding: 8px;
        color: #fff;
      }
    }
    .cartItemPrice {
      font-weight: 600;
    }
  }
  .cartItemDeleteHandler {
    width: 10%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .cartItemDeleteBtn {
      background-color: #000;
      border-radius: 50%;
      width: fit-content;
      padding: 8px;
      color: #fff;
      margin: auto;
    }
  }
`;
