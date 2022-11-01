import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import styled from "styled-components";
// import Item from "../Item/Item";
// import { getAllProducts } from "../mockService/mockService";

const ItemContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
  border: 1px solid blue;
`;

function ItemListContainer() {
  const [itemsApi, setItemsApi] = useState([]);

  async function getAllProducts() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
    setItemsApi(result);
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ItemContainer>
      <ItemList data={itemsApi} />
    </ItemContainer>
  );
}

export default ItemListContainer;
