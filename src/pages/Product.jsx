import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const [product, setProduct] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products/${params.productId}`)
      .then((resp) => resp.json())
      .then((product) => setProduct(product));
  }, []);
  if (product === null) return <h1>Page loading...</h1>;

  return (
    <main className="product-main">
      <div className="product-left-main">
        <div className="top-left">
          <div className="top-product-image">
            <img id="top-product-image" src={product.image} alt="" />
          </div>
          <div className="left-product-specificity">
            <div id="product-name">{product.name}</div>
            <div id="product-pql">
              US $1.5-2.5 / Meter | 500 Meters (Min. Order)
            </div>
            <div id="product-availability">
              <div className="product-features">
                <p className="key">Thickness:</p>
                <p className="value">{product.thickness}</p>
              </div>
              <div className="product-features">
                <p className="key">Usage:</p>
                <p className="value">{product.usage}</p>
              </div>
              <div className="product-features">
                <p className="key">Feature:</p>
                <p className="value">{product.feature}</p>
              </div>
              <div className="product-features">
                <p className="key">Width:</p>
                <p className="value">{product.width}</p>
              </div>
              <div className="product-features">
                <p className="key">Pattern:</p>
                <p className="value">{product.pattern}</p>
              </div>
              <div className="product-features">
                <p className="key">Material:</p>
                <p className="value">{product.material}</p>
              </div>
              <div className="product-features">
                <p className="key">Samples:</p>
                <p className="value">{product.samples}</p>
              </div>
              <div className="product-features">
                <p className="key">Customization:</p>
                <p className="value">{product.customization}</p>
              </div>
            </div>
          </div>
        </div>

        <span id="product-dsc">Products Descriptions:</span>
        <div className="bottom-left">
          <div className="product-descriptions">
            <div className="product-descriptions-left-tab">
              <p className="left-tab-feature">Products Features: </p>
              <p className="left-tab-feature">Material:</p>
              <p className="left-tab-feature">MOQ:</p>
              <p className="left-tab-feature">Technology:</p>
              <p className="left-tab-feature">Logo:</p>
              <p className="left-tab-feature">Size:</p>
              <p className="left-tab-feature">Charge:</p>
              <p className="left-tab-feature">Time:</p>
            </div>
            <div className="product-descriptions-right-tab">
              <p className="right-tab-info">Fashion and home decoration</p>
              <p className="right-tab-info">{product.material}</p>
              <p className="right-tab-info">{product.MOQ}</p>
              <p className="right-tab-info">{product.technology}</p>
              <p className="right-tab-info">{product.logo}</p>
              <p className="right-tab-info">{product.size}</p>
              <p className="right-tab-info" id="right-tab-info-price">
                {product.charge}
              </p>
              <p className="right-tab-info">{product.time}</p>
            </div>
          </div>
          <div className="bottom-product-image">
            <img
              id="bottom-product-image"
              src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="product-right-main">
        <div className="top-right">
          <div className="product-contact-manager">
            <p>Contact manager</p>
          </div>
          <div className="product-manager-pic-name">
            <div id="manager-pic">
              <img src="../assets/account_circle_black_24dp.svg" alt="" />
            </div>
            <div id="manager-name">Ben Affleck</div>
          </div>
          <div className="manager-send-button-wrapper">
            <button id="manager-send-button">
              <img src="../assets/email_white_24dp.svg" alt="" sizes="" />
              <p>Contact now</p>
            </button>
          </div>
        </div>
        <div className="bottom-right">
          <div id="might-also-like-txt">
            <p>YOU MIGHT ALSO LIKE:</p>
          </div>
          <div className="bottom-right-products">
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
            <div className="bottom-right-product">
              <div className="bottom-right-product-img">
                <img
                  src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="bottom-right-product-description">
                Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
                for Car Accessory Interior
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
