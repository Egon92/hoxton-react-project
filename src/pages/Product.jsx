export default function Product() {
  return (
    <main className="main">
      <div className="left-main">
        <div className="top-left">
          <div className="top-product-image">
            <img
              id="top-product-image"
              src="https://images.unsplash.com/photo-1573227896778-8f378c4029d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="left-product-specificity">
            <div id="product-name">
              Smooth Abrasion Resistant PVC Faux Leather Vinyl Leather Fabric
              for Car Accessory Interior
            </div>
            <div id="product-pql">
              US $1.5-2.5 / Meter | 500 Meters (Min. Order)
            </div>
            <div id="product-availability">
              <div>
                <p className="product-features">Thickness</p> : <p>0.6~1.2</p>
              </div>
              <div>
                <p className="product-features">Usage</p> :{" "}
                <p>
                  Bag, Shoes, Furniture, Decorative, Car Seat, Home Textile,
                  Gloves, Notebook, Belt
                </p>
              </div>
              <div>
                <p className="product-features">Feature</p> :{" "}
                <p>Abrasion Resistant, Soft</p>
              </div>
              <div>
                <p className="product-features">Width</p> : <p>54/55"</p>
              </div>
              <div>
                <p className="product-features">Pattern</p> : <p>Embossed</p>
              </div>
              <div>
                <p className="product-features">Material</p> : <p>PVC</p>
              </div>
              <div>
                <p className="product-features">Samples</p> :{" "}
                <p>US$ 15/Meter 1 Meter(Min.Order)</p>
              </div>
              <div>
                <p className="product-features">Customization</p> :{" "}
                <p>Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-left">
          <div className="product-descriptions"></div>
          <div className="bottom-product-image">
            <img id="bottom-product-image" src="" alt="" />
          </div>
        </div>
      </div>
      <div className="right-main">
        <div className="top-right">
          Contact menager
          <div className="manager-pic-name">
            <div id="manager-pic"></div>
            <div id="manager-name"></div>
          </div>
          <div className="manager-input-send-button">
            <div id="manager-input"></div>
            <div id="manager-send-button"></div>
          </div>
        </div>
        <div className="bottom-right">
          YOU MIGHT ALSO LIKE
          <div className="bottom-right-product">
            <div className="bottom-right-product-img"></div>
            <div className="bottom-right-product-description"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
