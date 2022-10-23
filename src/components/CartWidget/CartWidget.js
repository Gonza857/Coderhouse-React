import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css";

function CartWidget() {
  return (
    <div>
      <FontAwesomeIcon className="cartWidget" icon={faShoppingCart} />
    </div>
  );
}

export default CartWidget;
