import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Product from "./Product";

export default function Main(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <main className="main">
      <div className="top-main">
        <img src="" alt="" />
      </div>
      <div className="bottom-main">
        <div className="asside">
          <div className="product-groups">
            <h2>Product Groups</h2>
            <li>BAGS AND CASE</li>
            <li>TABLE MAT</li>
            <li>PLACEMATS/COASTER</li>
            <li>PVC/PU LEATHER</li>
          </div>
          <div className="featured-list">
            <h2>Feagured List</h2>
            <li>Sample Available</li>
            <li>Our Lifestyle</li>
            <li>Recommended for you</li>
            <li>Popular Products</li>
            <li>Spot Goods</li>
          </div>
          <div className="contact-manager">
            <h2>Contact manager</h2>
            <div className="manager-cart">
              <div className="manager-pic-name">
                <img
                  className="manager-pic"
                  src="/assets/account_circle_black_24dp.svg"
                  alt=""
                />
                <p className="manager-name">Ben Affleck</p>
              </div>

              <textarea
                name="complaint"
                id="complaint"
                // @ts-ignore
                cols="33"
                // @ts-ignore
                rows="5"
              ></textarea>
              <div className="send-to-manager-button">
                <button className="send-button">SEND</button>
              </div>
            </div>
          </div>
        </div>
        <div className="products">
          {products.map((product) => (
            <div className="product">
              <Link to={`/${product.id}`}>
                <img className="product-image" src={product.image} alt="" />
              </Link>
              <div className="product-info">
                <p className="product-description">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-buttons">
                <button className="contact-now-button">Contact Now</button>
                <button
                  className="product-basket-button"
                  onClick={() => props.setModal(true)}
                >
                  🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
