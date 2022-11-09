import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";

const Autos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
`;

function ItemList({ data }) {
  return (
    <Autos>
      {data.map((product) => {
        return <Item key={product.id} data={product} />;
      })}
    </Autos>
  );
}

export default ItemList;
