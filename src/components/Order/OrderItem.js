import React from "react";
import styled from "styled-components";

function OrderItem({ item }) {
  let allItemsPrice = item.quantity * item.price;
  allItemsPrice = Number(allItemsPrice.toFixed(2));

  return (
    <OrderItemContainer>
      <div className="orderItem-img">
        <img src={item.image} alt={`Image ${item.title}`} />
      </div>
      <div className="orderItem-details">
        <p className="orderItem-title">{item.title}</p>
        <div className="orderItem-price">
          <p>Unidades: {item.quantity}</p>
        </div>
        <p>Precio total: ${allItemsPrice}</p>
      </div>
    </OrderItemContainer>
  );
}

export default OrderItem;

const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 130px;
  padding: 10px 0;
  border: 0.5px solid #c7c7c7;
  border-radius: 20px;
  .orderItem-img {
    width: 20%;
    height: 100%;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .orderItem-details {
    padding: 0 15px;
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .orderItem-title {
      font-weight: 600;
    }
    .orderItem-price {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
`;
