import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 5px;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
`;

function ItemListContainer({greeting}) {
  return (
    <>
      <h1>{greeting}</h1>
      <CardContainer>
      <Item imgUrl="#" title="Honda Civic Si" text="Relleno" />
      <Item imgUrl="#" title="Volkswagen Vento 2.0T" text="Relleno" />
      <Item imgUrl="#" title="Suzuki Swift 1.3" text="Relleno" />
      <Item imgUrl="#" title="Suzuki Swift 1.3" text="Relleno" />
      <Item imgUrl="#" title="Suzuki Swift 1.3" text="Relleno" />
      <Item imgUrl="#" title="Suzuki Swift 1.3" text="Relleno" />
    </CardContainer>
    </>
  );
}

export default ItemListContainer;
