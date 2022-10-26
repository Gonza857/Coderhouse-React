import "./buttons.css";
import React, { useState } from "react";

function Button(props) {
  let estilo = { color: "red" };

  const [color, setColor] = useState(estilo);

  const handleClick =() => {
    setColor((estilo = { color: "#fff" }));
  }

  return (
    <a href="#" style={color} onClick={handleClick}>
      {props.text}
    </a>
  );
}

export default Button;
