import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  function addToCart(dataItem) {
    let searchItem = cart.find((item) => item.id === dataItem.id);
    if (searchItem) {
      let newCart = cart.map((item) => {
        if (item.id === dataItem.id) {
          item.quantity += dataItem.quantity;
          return item;
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // const copyCart = [...cart];
      //   copyCart.push(dataItem);
      //   setCart(copyCart);
      setCart((newCart) => {
        newCart.push(dataItem);
        return newCart;
      });
    }
  }

  function itemsInCart() {
    let totalItems = 0;
    cart.forEach((item) => (totalItems += item.quantity));
    return totalItems;
  }

  function removeItem() {}

  function clearCart() {}

  function totalCartPrice() {}

  const value = {
    itemsInCart,
    addToCart,
    cart,
  };
  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
};
