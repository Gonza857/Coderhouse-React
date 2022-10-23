import React from "react";
import styled from "styled-components";

const Title = styled.h5`
  color: palevioletred;
`;

const Card = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const BtnVer = styled.button`
  background-color: lightgreen;
  width: fit-content;
  padding: 2px 10px;
`;
const BtnComprar = styled(BtnVer)`
  background-color: pink;
`;

function Item({ imgUrl, title, text }) {
  return (
    <Card>
      <img src={imgUrl} />
      <Title>{title}</Title>
      <p>{text}</p>
      <BtnContainer>
        <BtnVer>Ver</BtnVer>
        <BtnComprar>Comprar</BtnComprar>
      </BtnContainer>
    </Card>
  );
}

export default Item;
