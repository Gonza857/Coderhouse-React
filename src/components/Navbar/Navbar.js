import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import Button from "../Button/Buttons";

const UserAccount = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
`;

const Nav = styled.nav`
  background-color: #123;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-around;
`;

function Navbar() {
  return (
    <Nav>
      <Logo />
      <NavbarLinks>
        <Button text="Autos" hacia="/" />
        <Button text="Motos" />
        <Button text="Bicicletas" />
      </NavbarLinks>
      <UserAccount>
        <Button text="Iniciar sesión" />
        <Button text="Registrate" />
      </UserAccount>
      <CartWidget />
    </Nav>
  );
}

export default Navbar;
