import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartDisplay from "./components/CartDisplay/CartDisplay";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Order from "./components/Order/Order";
import { CartContextProvider } from "./storage/CartContext";

function App() {
  return (
    <div className="container">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path="/details/:id"
              element={<ItemDetailContainer />}
            ></Route>
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/cart" element={<CartDisplay />}></Route>
            <Route path="/checkout" element={<Order />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
