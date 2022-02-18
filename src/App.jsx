import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CartModal from "./components/CartModal";
import Main from "./pages/Main";
import Product from "./pages/Product";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <div className="top-header">
          <div className="logo">
            <img src="/assets/leather.png" alt="" />
          </div>
          <div className="right-header">
            <div className="company-name">Leather company Ltd.</div>
            <div className="search-bar">
              <div className="search-input">
                <input type="search" />
              </div>
              <div className="search-icon">
                <img src="/assets/search_white_24dp.svg" alt="" />
              </div>
              <div className="basket">
                <button onClick={() => setModal(true)}>🛒</button>
              </div>
            </div>
          </div>
        </div>
        <nav className="nav-bar">
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Solutions</li>
          <li>Contact Us</li>
        </nav>
      </header>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>

      {modal ? <CartModal setModal={setModal} /> : null}

      <footer className="footer">
        <div className="footer-products">
          <li>Hot Products</li>
          <li>Products</li>
          <li>Manufacturers/Suppliers</li>
          <li>Wholesale</li>
          <li>Wholesale Price</li>
          <li>Industry Sites</li>
          <li>Regional Channels</li>
          <li>Regional Channels</li>
          <li>Product Index</li>
          <li>Mobile Site</li>
        </div>
        <div className="footer-language">
          Language Options
          <li>Español</li>
          <li>Português</li>
          <li>Français</li>
          <li>Русский язык</li>
          <li>Italiano</li>
          <li>Deutsch</li>
          <li>Deutsch</li>
          <li>Nederlands</li>
          <li>لعربية</li>
          <li>한국어</li>
          <li>日本語</li>
        </div>
        <div className="footer-copyrights">
          <li>
            Copyright © 1998-2022 Focus Technology Co., Ltd. All Rights
            Reserved.
          </li>
          <li>Terms & Conditions</li>
          <li>Declaration</li>
          <li>Privacy Policy</li>
        </div>
      </footer>
    </div>
  );
}

export default App;
