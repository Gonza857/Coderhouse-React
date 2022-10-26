import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <ItemListContainer greeting="Hola!" />
    </div>
  );
}

export default App;
