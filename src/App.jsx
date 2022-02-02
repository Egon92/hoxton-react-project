import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
      <main>
        <div className="top-main"></div>
        <div className="bottom-main">
          <div className="asside"></div>
          <div className="products">
            <div className="product">
              <img
                className="product-image"
                src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
              <div className="product-info">
                <p className="product-description">
                  Smooth Abrasion Resistant PVC Faux Leather
                </p>
                <p className="product-price">US $1.5-2.5</p>
              </div>
              <button>Contact Now</button>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
              <div className="product-info">
                <p className="product-description">
                  Smooth Abrasion Resistant PVC Faux Leather
                </p>
                <p className="product-price">US $1.5-2.5</p>
              </div>
              <button>Contact Now</button>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
              <div className="product-info">
                <p className="product-description">
                  Smooth Abrasion Resistant PVC Faux Leather
                </p>
                <p className="product-price">US $1.5-2.5</p>
              </div>
              <button>Contact Now</button>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
              <div className="product-info">
                <p className="product-description">
                  Smooth Abrasion Resistant PVC Faux Leather
                </p>
                <p className="product-price">US $1.5-2.5</p>
              </div>
              <button>Contact Now</button>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
              <div className="product-info">
                <p className="product-description">
                  Smooth Abrasion Resistant PVC Faux Leather
                </p>
                <p className="product-price">US $1.5-2.5</p>
              </div>
              <button>Contact Now</button>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
              <div className="product-info">
                <p className="product-description">
                  Smooth Abrasion Resistant PVC Faux Leather
                </p>
                <p className="product-price">US $1.5-2.5</p>
              </div>
              <button>Contact Now</button>
            </div>
            <div className="product">
              <img
                className="product-image"
                src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
              <div className="product-info">
                <p className="product-description">
                  Smooth Abrasion Resistant PVC Faux Leather
                </p>
                <p className="product-price">US $1.5-2.5</p>
              </div>
              <button>Contact Now</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
