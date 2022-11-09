import React from "react";
import CartWidget from "../Cart/CartWidget";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button/Buttons";

// const UserAccount = styled.div`
//   width: 15%;
//   display: flex;
//   justify-content: space-around;
// `;

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

const estiloBotonNavbar = {
  backgroundColor: "unset",
  color: "#fff",
  border: "none",
};

function Navbar() {
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <NavbarLinks>
        <Link to="/category/men's clothing">
          <Button estilo={estiloBotonNavbar}>Hombre</Button>
        </Link>
        <Link to="/category/women's clothing">
          <Button estilo={estiloBotonNavbar}>Mujer</Button>
        </Link>
        <Link to="/category/jewelery">
          <Button estilo={estiloBotonNavbar}>Joyas</Button>
        </Link>
        <Link to="/category/electronics">
          <Button estilo={estiloBotonNavbar}>Electrónica</Button>
        </Link>
      </NavbarLinks>
      {/* <UserAccount>
        <Link to="">Iniciar sesión</Link>
        <Link to="">Registrarse</Link>
      </UserAccount> */}
      <CartWidget />
    </Nav>
  );
}

export default Navbar;
