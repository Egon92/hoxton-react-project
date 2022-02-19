import "./CartModal.css";

export default function CartModal(props) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button onClick={() => props.setModal(false)}>❌</button>
        <div id="modal">
          <div className="top-section">
            <div className="cart-image">
              <img src="" alt="" />
            </div>
            <div className="cart-psp">
              <p className="product-features">Product name</p>
              <p className="product-features">
                <span>Stock</span> : <span>3</span>
              </p>
              <p className="product-features">Price</p>
            </div>
          </div>
          <div className="bottom section">
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
