import React, { useContext } from "react";
import styled from "styled-components";
import { cartContext } from "../../storage/CartContext.js";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import CartItem from "../CartItem/CartItem.jsx";

function CartView() {
  const { cart, totalCartPrice, clearCart } = useContext(cartContext);

  return (
    <CartItemContainer>
      <h5>Estas visualizando tu carrito de compras</h5>
      <div className="cartItems">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="cartInfo">
        <p>Subtotal: ${totalCartPrice()}</p>
        <div className="cartInfoButtons">
          <Link to="/checkout">
            <Button>Realizar pedido</Button>
          </Link>
          <Button primary={false} fn={clearCart}>
            Vaciar carrito
          </Button>
        </div>
      </div>
    </CartItemContainer>
  );
}

export default CartView;

const CartItemContainer = styled.div`
  h5 {
    text-align: center;
    font-size: 20px;
    padding: 10px 0;
  }
  .cartItems {
    width: 80%;
    margin: auto;
    padding: 0;
  }
  .cartInfo {
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-weight: bold;
    }
    .cartInfoButtons {
      display: flex;
      gap: 20px;
    }
  }
`;
