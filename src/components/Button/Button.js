import React, { useState } from "react";
import styled from "styled-components";

function Button({ fn, children, primary = true }) {
  const [isPrimary, setIsPrimary] = useState(primary);
  const [isCounterBtn, setIsCounterBtn] = useState(false);
  console.log(isPrimary);
  return (
    <>
      {isCounterBtn ? (
        <></>
      ) : (
        <>
          {isPrimary ? (
            <BtnPrimary onClick={fn}>{children}</BtnPrimary>
          ) : (
            <BtnSecondary onClick={fn}>{children}</BtnSecondary>
          )}
        </>
      )}
    </>
  );
}

export default Button;

const BtnPrimary = styled.button`
  font-weight: 600;
  border: none;
  border-radius: 10px;
  background-color: #123;
  color: #fff;
  padding: 8px 15px;
  &:hover {
    background-color: rgb(38, 55, 71);
  }
`;

const BtnSecondary = styled.button`
  font-weight: 600;
  border: none;
  border-radius: 10px;
  background-color: #c7c7c7;
  color: #000;
  padding: 8px 15px;
  &:hover {
    background-color: #aaaaaa;
  }
`;

const BtnCounter = styled.button``
