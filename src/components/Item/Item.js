import React from "react";
import styled from "styled-components";

const Title = styled.h5`
  color: palevioletred;
  padding: 0 10px;
  margin: 0;
`;

const Card = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 1px #c3c3c3, -1px 0 1px #c3c3c3;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  margin-bottom: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
`;
const BtnVer = styled.button`
  background-color: lightgreen;
  width: fit-content;
  padding: 2px 10px;
`;
const BtnComprar = styled(BtnVer)`
  background-color: pink;
`;

const ProductImg = styled.img`
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const ProductImgContainer = styled.div`
  width: 100%;
`;

const Text = styled.p`
  padding: 0 10px;
`;

function Item({ auto }) {
  return (
    <Card key={auto.id}>
      <ProductImgContainer>
        <ProductImg src={auto.img} />
      </ProductImgContainer>
      <Title>{auto.car_brand}</Title>
      <Text>{auto.price}</Text>
      <BtnContainer>
        <BtnVer>Ver</BtnVer>
        <BtnComprar>Comprar</BtnComprar>
      </BtnContainer>
    </Card>
  );
}

export default Item;
