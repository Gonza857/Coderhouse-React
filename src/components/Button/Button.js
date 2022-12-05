import React from "react";
import styled from "styled-components";

function Button({ fn, children, primary = true, counterBtn = false }) {
  return (
    <>
      {counterBtn ? (
        <>
          <BtnCounter onClick={fn}>{children}</BtnCounter>
        </>
      ) : (
        <>
          {primary ? (
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
  width: fit-content;
  border: none;
  border-radius: 10px;
  background-color: #123;
  color: #fff;
  padding: 8px 15px;
  margin: auto;
  &:hover {
    background-color: rgb(38, 55, 71);
  }
`;

const BtnSecondary = styled.button`
  font-weight: 600;
  width: fit-content;
  border: none;
  border-radius: 10px;
  background-color: #c7c7c7;
  color: #000;
  padding: 8px 15px;
  margin: auto;
  &:hover {
    background-color: #aaaaaa;
  }
`;

const BtnCounter = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: transparent;
`;
