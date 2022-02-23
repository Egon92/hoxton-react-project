import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import Product from "./pages/Product";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Header setModal={setModal} />
      <Routes>
        <Route index element={<Main setModal={setModal} />} />
        <Route path="/:productId" element={<Product />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>

      {modal ? <CartModal setModal={setModal} /> : null}
      <Footer />
    </div>
  );
}

export default App;
