import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./CartModal.css";

export default function CartModal(props) {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${params.productId}`)
      .then((resp) => resp.json())
      .then((product) => setProduct(product));
  }, []);
  if (product === null) return <h1>Page loading...</h1>;

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="close-modal-button-wrapper">
          <button id="close-modal-button" onClick={() => props.setModal(false)}>
            <img src="../assets/close_white_24dp.svg" alt="" />
          </button>
        </div>

        <div id="modal">
          <div className="top-section">
            <div className="cart-image-wrapper">
              {/* <img
                src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              /> */}
            </div>
            <div className="cart-psp">
              <p className="product-features" id="product-name">
                {product.name}
              </p>
              <p className="product-features" id="product-features-stock">
                <span id="stock">Stock:</span>
                <span id="stock-number">{product.stock}</span>
              </p>
              <p className="product-features" id="price">
                {product.price}
              </p>
            </div>
          </div>
          <div className="bottom-section">
            <div className="buy-button-wrapper">
              <button className="buy-button">Buy now!</button>
            </div>
            <div className="add-button-wrapper">
              <button className="add-button">Add to your basket!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
