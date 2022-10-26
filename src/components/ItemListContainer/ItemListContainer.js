import React from "react";
import styled from "styled-components";
import ItemList from "../ItemList/ItemList";

const CardContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  gap: 5px;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
`;

function ItemListContainer({ greeting }) {
  return (
    <>
      <h1>{greeting}</h1>
      <CardContainer>
        <ItemList/>
      </CardContainer>
    </>
  );
}

export default ItemListContainer;
