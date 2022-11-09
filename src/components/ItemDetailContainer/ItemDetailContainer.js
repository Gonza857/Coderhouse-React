import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemDetail from "./ItemDetail";

const ItemContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
  border: 1px solid blue;
`;

function ItemDetailCointainer() {
  const [itemsApi, setItemsApi] = useState([]);
  let params = useParams();
  let paramsId = params.id;

  async function getSingleProduct(id) {
    let response = await fetch(`https://fakestoreapi.com/products`);
    let result = await response.json();
    let search = result.find((objeto) => objeto.id === Number(id));
    if (search) {
      setItemsApi(search);
    } else {
      throw new Error("no capo");
    }
  }

  useEffect(() => {
    setItemsApi(getSingleProduct(paramsId));
  }, []);


  return (
    <>
      <ItemContainer>
        <ItemDetail data={itemsApi} mode={true} />
      </ItemContainer>
    </>
  );
}

export default ItemDetailCointainer;
