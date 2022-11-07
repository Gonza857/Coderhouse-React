import React from "react";
import styled from "styled-components";

const LogoTienda = styled.h3`
  font-weight: bold;
  color: #fff;
`;

function Logo() {
  return (
    <>
      <LogoTienda>Mi tienda</LogoTienda>
    </>
  );
}

export default Logo;
