import React from "react";

function Button({ fn, children, estilo }) {
  return (
    <>
      <button style={estilo} onClick={fn}>{children}</button>
    </>
  );
}

export default Button;
