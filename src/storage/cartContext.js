import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const cartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    console.log(cart);
    itemsInCart();
  }, [cart]);

  function addToCart(dataItem) {
    console.log("addToCart() ejecutado");
    let searchItem = cart.find((item) => item.id === dataItem.id);
    if (searchItem === undefined) {
      console.log("el item no estaba en el carrito");
      let newCart = [...cart];
      newCart.push(dataItem);
      setCart(newCart);
      setIsCartEmpty(false);
    } else {
      let copyCart = [...cart];
      let newCart = copyCart.map((item) => {
        if (item.id === dataItem.id) {
          item.quantity += dataItem.quantity;
          return item;
        } else {
          return item;
        }
      });
      console.log("el item ya estaba en el carrito");
      setCart(newCart);
      setIsCartEmpty(false);
      // setCart((newCart) => {
      //   newCart.push(dataItem);
      //   return newCart;
      // });
    }
  }

  function itemsInCart() {
    let totalItems = 0;
    cart.forEach((item) => (totalItems += item.quantity));
    console.log(totalItems);
    return <span>{totalItems}</span>;
  }

  function deleteAllUnits(item) {
    const copyCart = [...cart];
    let hola = copyCart.findIndex((product) => product.id === item.id);
    copyCart.splice(hola, 1);
    if (copyCart.length === 0) {
      setIsCartEmpty(true);
    }
    setCart(copyCart);
    Swal.fire({
      icon: "success",
      text: "¡El producto fue eliminado correctamente!",
    });
  }

  function deleteSingleProduct(item) {
    if (item.quantity === 1) {
      Swal.fire({
        title: "Se eliminará el producto del carrito",
        text: "¿Deseas continuar?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar",
      })
        .then((result) => {
          if (result.isConfirmed) {
            deleteAllUnits(item);
            Swal.fire("Eliminado", "Se eliminó el producto.", "success");
          }
        })
        .catch((error) => console.log(error));
      return;
    } else if (item.quantity === 0) return;
    let copyCart = [...cart];
    let modCart = copyCart.map((prod) => {
      if (prod.id === item.id) {
        prod.quantity -= 1;
      }
      return prod;
    });
    setCart(modCart);
  }

  function clearCart() {
    setCart([]);
    setIsCartEmpty(true);
  }

  function totalCartPrice() {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  }

  function addSingleProduct(item) {
    if (item.quantity === item.rating.count) {
      Swal.fire({
        icon: "error",
        text: "¡No hay más stock disponible!",
      });
      return;
    }
    let copyCart = [...cart];
    let modCart = copyCart.map((prod) => {
      if (prod.id === item.id) {
        prod.quantity += 1;
      }
      return prod;
    });
    setCart(modCart);
  }

  function isThisItemInCart(itemDado) {
    let search = cart.find((product) => product.id === itemDado.id);
    console.log(search);
    if (search !== undefined) {
      console.log("esta ya en el carrito este item");
      return true;
    } else {
      console.log("no esta en el carrito este item");
      return false;
    }
  }

  function getItemInCartQuantity(data) {
    let search = cart.filter((producto) => producto.id === data.id);
    console.log(search);
    return search;
  }

  const value = {
    itemsInCart,
    addToCart,
    cart,
    totalCartPrice,
    clearCart,
    deleteAllUnits,
    deleteSingleProduct,
    isCartEmpty,
    addSingleProduct,
    isThisItemInCart,
    getItemInCartQuantity,
  };
  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
};
