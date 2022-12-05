import React, { useContext, useEffect } from "react";
import { cartContext } from "../../storage/CartContext.js";
import OrderForm from "./OrderForm";
import CartDisplay from "../CartDisplay/CartDisplay";
import { useNavigate } from "react-router-dom";

function Order() {
  const { isCartEmpty } = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCartEmpty) navigate("/cart");
  }, [isCartEmpty, navigate]);

  return <>{isCartEmpty ? <CartDisplay /> : <OrderForm />}</>;
}

export default Order;
