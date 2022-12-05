import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const cartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    itemsInCart();
  }, [cart, itemsInCart]);

  function addToCart(dataItem) {
    let searchItem = cart.find((item) => item.id === dataItem.id);
    if (searchItem === undefined) {
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
    return <span>{totalItems}</span>;
  }

  function deleteAllUnits(item) {
    Swal.fire({
      title: "Se eliminarán todas las unidades del producto del carrito.",
      text: "¿Deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        const copyCart = [...cart];
        let hola = copyCart.findIndex((product) => product.id === item.id);
        copyCart.splice(hola, 1);
        setCart(copyCart);
        Swal.fire("Eliminado", "Se eliminó el producto.", "success");
        if (cart.length === 0) {
          setIsCartEmpty(true);
        }
      }
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
    Swal.fire({
      title: "¿Seguro que deseas vaciar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Vaciar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Se vacío el carrito!", "", "success");
        setCart([]);
        setIsCartEmpty(true);
      } else if (result.isDenied) {
        Swal.fire("El carrito no fue vaciado", "", "info");
      }
    });
  }

  function totalCartPrice() {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    totalPrice = Number(totalPrice.toFixed(2));
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
    if (search !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  function getItemInCartQuantity(data) {
    let search = cart.filter((producto) => producto.id === data.id);
    return search;
  }

  const value = {
    itemsInCart,
    addToCart,
    setCart,
    cart,
    totalCartPrice,
    clearCart,
    deleteAllUnits,
    deleteSingleProduct,
    isCartEmpty,
    setIsCartEmpty,
    addSingleProduct,
    isThisItemInCart,
    getItemInCartQuantity,
  };
  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
};
