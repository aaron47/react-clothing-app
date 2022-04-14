import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products";
import { ClothesContextProvider } from "./ClothesContext";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <ClothesContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ClothesContextProvider>
    </div>
  );
}

export default App;
