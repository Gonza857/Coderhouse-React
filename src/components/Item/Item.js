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
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid blue;
`;

const ProductImgContainer = styled.div`
  width: 50%;

  margin: 0 auto;
`;

const ProductImg = styled.img`
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 100%;
  padding: 0;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  border 3px solid green
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  margin-bottom: 20px;
`;
const BtnVer = styled.button`
  background-color: lightgreen;
  width: fit-content;
  padding: 2px 10px;
`;
const BtnComprar = styled(BtnVer)`
  background-color: pink;
`;

const Text = styled.p`
  padding: 0 10px;
`;

const Separator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 10px;
`;

function Item({ itemsApi }) {
  return (
    <Card>
      <Separator>
        <ProductImgContainer>
          <ProductImg src={itemsApi.image} />
        </ProductImgContainer>

        <ProductInfoContainer>
          <Title>{`${itemsApi.title}`}</Title>
          <Text>{"$" + itemsApi.price}</Text>
        </ProductInfoContainer>
      </Separator>
      <BtnContainer>
        <BtnVer>Ver</BtnVer>
        <BtnComprar>Comprar</BtnComprar>
      </BtnContainer>
    </Card>
  );
}

export default Item;
