import React from "react";

function Button({ fn, children, clase, colorBg, estilo }) {
  return (
    <>
      <button onClick={fn} className={clase} style={estilo}>
        {children}
      </button>
    </>
  );
}

export default Button;
