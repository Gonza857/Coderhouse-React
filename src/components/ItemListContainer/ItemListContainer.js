import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
// import Item from "../Item/Item";
// import { getAllProducts } from "../mockService/mockService";

const ItemContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

function ItemListContainer() {
  const [itemsApi, setItemsApi] = useState([]);
  const { categoryId } = useParams();

  async function getAllProducts() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
    // result.forEach((cosa) => {
    //   let { category } = cosa;
    //   let indice = category.indexOf("h");
    //   if (indice > 0) {
    //     let sacado = category.replace("'", "");
    //     let juna = sacado.split(" ").join("");
    //     cosa.category = juna;
    //   }
    // });
    // console.log(result);
    setItemsApi(result);
  }

  async function getProductsByCategory() {
    let response = await fetch(`https://fakestoreapi.com/products`);
    let result = await response.json();
    // result.forEach((cosa) => {
    //   let { category } = cosa;
    //   let indice = category.indexOf("h");
    //   if (indice > 0) {
    //     let sacado = category.replace("'", "");
    //     let juna = sacado.split(" ").join("");
    //     cosa.category = juna;
    //   }
    // });
    let search = result.filter((objeto) => objeto.category === categoryId);
    setItemsApi(search);
    // console.log(result);
    // console.log("gato");
    // let search = result.filter((objeto) => objeto.category === categoryId);
    // if (search.lenth > 0) {
    //   setItemsApi(search);
    // } else {
    //   throw new Error("no capo");
    // }
  }

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId);
    } else {
      getAllProducts();
    }
  }, [categoryId]);

  console.log(categoryId);
  console.table(itemsApi);

  return (
    <ItemContainer>
      <ItemList data={itemsApi} />
    </ItemContainer>
  );
}

export default ItemListContainer;
