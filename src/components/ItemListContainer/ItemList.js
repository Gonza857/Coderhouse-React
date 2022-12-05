import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";

const Products = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
  gap: 15px;
`;

function ItemList({ data }) {
  return (
    <Products>
      {data.map((product) => {
        return <Item key={product.id} data={product} />;
      })}
    </Products>
  );
}

export default ItemList;
