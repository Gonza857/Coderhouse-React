import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";

function ErrorPage() {
  return (
    <ErrorPageContainer>
      <h2>Error: Esta página no existe</h2>
      <Link to="/">
        <Button>Click aquí para ir al inicio</Button>
      </Link>
    </ErrorPageContainer>
  );
}

export default ErrorPage;

const ErrorPageContainer = styled.main`
  margin: auto;
  width: fit-content;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  a {
    margin: auto;
    button {
      width: fit-content;
      padding: 10px 20px;
      background-color: #123;
      color: #fff;
      border-radius: 50px;
    }
  }
`;
