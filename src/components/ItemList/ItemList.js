import React, { useState } from "react";
// import { data } from "../../data/data";
import Item from "../Item/Item";

// const getData = async () => {
//   let promesa = await new Promise((resolve, reject) => {
//     let error = false;
//     if (error) {
//       reject("rechazado");
//     } else {
//       resolve(data);
//     }
//   });
//   return promesa;
// };

function ItemList() {
  const [data, setData] = useState(undefined);

  async function getData() {
    try {
      let response = await fetch("../../data/data.json");
      console.log(response)

    } catch (error) {
      console.log(error);
    }
  }
  getData()

  return (
    <>
      {/* {data.map((auto) => (
        <Item key={0} auto={auto} />
      ))} */}
      <div>Hola</div>
    </>
  );
}

export default ItemList;
