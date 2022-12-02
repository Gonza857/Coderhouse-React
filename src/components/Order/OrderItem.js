import React from "react";
import "./orderItem.css";


function OrderItem({item}) {
  return (
    <div className="formItem">
      <div className="formProduct-image-container">
        <img src={item.image}/>
      </div>
      <div className="formProduct-details">
        <p>{item.title}</p>
        <div className="formProduct-quantity">
          <p>Unidades: {item.quantity}</p>
        </div>
        <p>Precio total: ${item.quantity * item.price}</p>
      </div>
    </div>
  );
}

export default OrderItem;
