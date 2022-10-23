import React from "react";
import "./logo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

function Logo() {
  return (
    <>
      <FontAwesomeIcon className="brandLogo" icon={faCar} />
    </>
  );
}

export default Logo;
