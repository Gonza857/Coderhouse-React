import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./item.css";

function Item({ data }) {
  let urlDetail = `/details/${data.id}`;
  return (
    <div className="productList-card">
      <div className="productList-img">
        <img src={data.image} alt="img" />
      </div>
      <div className="productList-info">
        <h5 className="productList-info_title">{`${data.title}`}</h5>
        <p className="productList-info_text">{"$" + data.price}</p>
        <p className="productList-info_text">
          {"Disponibles: " + data.rating.count}
        </p>
      </div>
      <div className="productList-buttons">
        <Link to={urlDetail}>
          <Button>Ver producto</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
