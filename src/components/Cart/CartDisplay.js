// import React, { useContext } from "react";
// import { cartContext } from "../../storage/CartContext";
// import styled from "styled-components";

// function CartDisplay() {
//   const { cart } = useContext(cartContext);
//   console.log(cart);
//   let algo = cart.some((item) => item);
//   console.log(algo);
//   return algo ? (
//     <div>
//         <p>Hola</p>
//       {cart.map((item) => {
//         <div>
//           <div>
//             <img src={item.image} />
//           </div>
//           <h3>{item.title}</h3>
//           <p>{item.price}</p>
//           <p>{item.quantity}</p>
//         </div>;
//       })}
//     </div>
//   ) : (
//     <h1>No hay nada</h1>
//   );
// }

// export default CartDisplay;
