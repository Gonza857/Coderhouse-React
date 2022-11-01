import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

function Button({ text }) {
  return (
    <Link>
      <Button>{text}</Button>
    </Link>
  );
}

export default Button;
