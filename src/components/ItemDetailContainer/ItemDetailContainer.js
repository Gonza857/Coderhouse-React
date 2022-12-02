import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemDetail from "./ItemDetail";
import { getSingleProduct } from "../../firebase/firebase";
import { JellyTriangle } from "@uiball/loaders";

const ItemContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
`;
const Titulo = styled.h1`
  font-size: 100px;
  color: red;
`;

function ItemDetailCointainer() {
  const [itemsApi, setItemsApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();
  let paramsId = params.id;

  const getProduct = async (paramsId) => {
    try {
      let response = await getSingleProduct(paramsId);
      setItemsApi(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(paramsId);
  }, [paramsId]);

  return (
    <>
      <ItemContainer>
        {isLoading ? (
          <JellyTriangle size={40} speed={1} color={"#123"} />
        ) : (
          <ItemDetail data={itemsApi} />
        )}
      </ItemContainer>
    </>
  );
}

export default ItemDetailCointainer;
