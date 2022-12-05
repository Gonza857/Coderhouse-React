import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { cartContext } from "../../storage/CartContext.js";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../EmptyCart/EmptyCart";
import CartView from "../CartView/CartView";

const BuyCart = styled.main`
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;

function CartDisplay() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/cart");
  }, [navigate]);

  const { isCartEmpty, setIsCartEmpty, cart } = useContext(cartContext);

  useEffect(() => {
    if (cart.length === 0) {
      setIsCartEmpty(true);
    } else {
      setIsCartEmpty(false);
    }
  }, [cart, isCartEmpty]);

  return (
    <BuyCart>
      {isCartEmpty ? (
        <>
          <EmptyCart />
        </>
      ) : (
        <>
          <CartView />
        </>
      )}
    </BuyCart>
  );
}

export default CartDisplay;
