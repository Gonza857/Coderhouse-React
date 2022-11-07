import { nominalTypeHack } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Buttons";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  height: fit-content;
  gap: 30px;
`;

const CounterHandler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  margin: 0;
  padding: 0;
  border-radius: 100px;
  overflow: hidden;
`;

const HandleCartButton = styled.button`
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: none;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 100px;
  padding: 5px 10px;
`;

const CounterText = styled.p`
  margin: 0;
  padding: 0 20px;
`;

const estiloBotonSumar = {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
  };

  const estiloBotonRestar = {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
  };

function Counter({ stock }) {
  const [counter, setCounter] = useState(0);
  console.log(stock);
  const handleSumar = () => {
    if (stock === counter) {
      alert("no hay más stock para comprar");
    } else {
      setCounter(counter + 1);
      console.log("sume 1");
    }
  };
  const handleRestar = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
    console.log("reste 1");
  };

 

  return (
    <CounterContainer>
      <CounterHandler>
        <Button estilo={estiloBotonRestar} fn={handleRestar} color="yellow">
          -
        </Button>
        <CounterText>{counter}</CounterText>
        <Button estilo={estiloBotonSumar} fn={handleSumar} color="lightblue">
          +
        </Button>
      </CounterHandler>
      <HandleCartButton>Agregar al carrito</HandleCartButton>
    </CounterContainer>
  );
}

export default Counter;
