import React, { useState, useEffect } from "react";
// import Item from "../Item/Item";

function ItemDetailCointainer() {
  const [itemsApi, setItemsApi] = useState([]);

  async function getAllProducts() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
    setItemsApi(result[0]);
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(itemsApi);

  return <>{/* <Item itemsApi={itemsApi}/> */}Hola</>;
}

export default ItemDetailCointainer;
