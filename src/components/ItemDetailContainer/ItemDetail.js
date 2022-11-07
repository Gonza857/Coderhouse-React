import React from "react";
import styled from "styled-components";
import Counter from "../Counter/Counter";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgContainer = styled.div`
  border: 3px solid #000;
  width: 50%;
  display: grid;
  padding: 50px 0;
`;

const Img = styled.img`
  margin: auto;
  border: 1px solid red;
  width: 50%;
`;

const Details = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailTitle = styled.h3`
  border: 1px solid red;
  text-align: center;
`;

const PriceAndCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Description = styled.p`
  text-align: center;
  padding: 0 15px;
`;

function ItemDetail({ data, mode }) {
  return (
    <>
      <DetailContainer>
        <ImgContainer>
          <Img src={data.image} />
        </ImgContainer>
        <Details>
          <DetailTitle>{data.title}</DetailTitle>
          <Description>{data.description}</Description>
          <PriceAndCount>
            <p>Precio: ${data.price}</p>
            <p>Stock: {data.rating?.count}</p>
          </PriceAndCount>
          <p>Categoria: {data.category}</p>
          <Counter stock={data.rating?.count}/>
        </Details>
      </DetailContainer>
    </>
  );
}

export default ItemDetail;
