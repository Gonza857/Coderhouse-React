import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemDetail from "./ItemDetail";
import { getSingleProduct } from "../../firebase/firebase";
import { JellyTriangle } from "@uiball/loaders";

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
      console.log(error); //FIXME:
    }
  };

  useEffect(() => {
    getProduct(paramsId);
  }, [paramsId]);

  return (
    <>
      <ItemContainer>
        {isLoading ? (
          <div className="itemDetailLoader">
            <JellyTriangle size={40} speed={1} color={"#123"} />
          </div>
        ) : (
          <ItemDetail data={itemsApi} />
        )}
      </ItemContainer>
    </>
  );
}

export default ItemDetailCointainer;

const ItemContainer = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
  margin-top: 20px;
  .itemDetailLoader {
    height: calc(100vh - 120px);
    display: grid;
    align-content: center;
    justify-content: center;
  }
`;
