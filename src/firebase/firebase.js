// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATE_bU6KrvymijR3xqjQ3rbhn5WVRYaJ8",
  authDomain: "reactcoder0-f8922.firebaseapp.com",
  projectId: "reactcoder0-f8922",
  storageBucket: "reactcoder0-f8922.appspot.com",
  messagingSenderId: "616224891397",
  appId: "1:616224891397:web:cd0374b6fbd7bc5700b26c",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const DataBase = getFirestore(FirebaseApp);

export async function getAllProducts() {
  try {
    // Collection, es como una referencia que apunta a la coleccion, es como un puente entre la app y la coleccion
    // 1) Conectarse a la coleccion
    // darle la colección y a cual base de datos
    const collectionProducts = collection(DataBase, "products");
    // 2) Traer documentos existentes
    // getDocs() es una promesa
    const response = await getDocs(collectionProducts);
    let products = response.docs.map((product) => {
      return {
        ...product.data(),
        id: product.id,
      };
    });
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function getSingleProduct(id) {
  try {
    const docRef = doc(DataBase, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } else {
      console.log("nada gato");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsByCategory(categoryId) {
  try {
    const getCollection = collection(DataBase, "products");
    const q = query(getCollection, where("category", "==", categoryId));
    const docSnap = await getDocs(q);
    let products = docSnap.docs.map((product) => {
      return {
        ...product.data(),
        id: product.id,
      };
    });
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function postOrder(orderData) {
  try {
    const collectionRef = collection(DataBase, "buyOrders");
    const docRef = await addDoc(collectionRef, orderData);
    return docRef.id;
  } catch (error) {
    console.log(error);
  }
}

// async function sendItemsToFS() {
//   const collectionRef = collection(DataBase, "products");
//   let response = await fetch("https://fakestoreapi.com/products");
//   let todos = await response.json();
//   console.log(todos);
//   for (let product of todos) {
//     const docRef = await addDoc(collectionRef, product);
//     console.log("subido", docRef.id);
//   }
// }
