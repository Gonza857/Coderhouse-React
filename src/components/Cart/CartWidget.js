import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css";
import { cartContext } from "../../storage/CartContext";

function CartWidget() {
  const { cart, itemsInCart } = useContext(cartContext);
  return (
    <div>
      <FontAwesomeIcon className="cartWidget" icon={faShoppingCart} />
      <small style={{ color: "#FFF", margin: "0px 0px 0px 10px" }}>
        {itemsInCart()}
      </small>
    </div>
  );
}

export default CartWidget;
