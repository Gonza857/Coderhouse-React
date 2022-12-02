import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css";
import { cartContext } from "../../storage/CartContext.js";
import { Link } from "react-router-dom";

function CartWidget() {
  const { itemsInCart, isCartEmpty } = useContext(cartContext);
  return (
    <div>
      <Link to="/cart">
        <div className="cartWidget-container">
          <FontAwesomeIcon className="cartWidget" icon={faShoppingCart} />
          {!isCartEmpty ? itemsInCart() : <></>}
        </div>
      </Link>
    </div>
  );
}

export default CartWidget;
