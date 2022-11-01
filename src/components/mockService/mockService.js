export async function getAllProducts() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
}

export async function getSingleProduct() {
  let response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch("./data/data.json"));
    }, 2000);
  });
  let resultado = await response.json();
}

export async function getProductsByCategory() {
  let response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch("./data/data.json"));
    }, 2000);
  });
  let resultado = await response.json();
}
