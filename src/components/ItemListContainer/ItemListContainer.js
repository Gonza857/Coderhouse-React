import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { JellyTriangle } from "@uiball/loaders";
import { getAllProducts, getProductsByCategory } from "../../firebase/firebase";
import Swal from "sweetalert2";

function ItemListContainer() {
  const [itemsApi, setItemsApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  const productsByCategory = async (categoryId) => {
    try {
      let response = await getProductsByCategory(categoryId);
      setItemsApi(response);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error, intentalo más tarde o recarga la pagina",
        text: `Codigo de error${error.code}`,
        confirmButtonText: "Entendido",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  };
  const allProducts = async () => {
    try {
      let response = await getAllProducts();
      setItemsApi(response);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error, intentalo más tarde o recarga la pagina",
        text: `Codigo de error${error.code}`,
        confirmButtonText: "Entendido",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  };

  useEffect(() => {
    if (categoryId) {
      productsByCategory(categoryId);
    } else {
      allProducts();
    }
  }, [categoryId]);

  return (
    <ItemContainer>
      {isLoading ? (
        <div className="itemListLoader">
          <JellyTriangle size={40} speed={1} color={"#123"} />
        </div>
      ) : (
        <ItemList data={itemsApi} />
      )}
    </ItemContainer>
  );
}

export default ItemListContainer;

const ItemContainer = styled.div`
  margin: auto;
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-self: center;
  flex-wrap: wrap;
  margin-top: 20px;
  .itemListLoader {
    height: calc(100vh - 120px);
    display: grid;
    align-content: center;
  }
`;
