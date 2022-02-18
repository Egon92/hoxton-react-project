import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Products() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then();
  });
  const params = useParams();
  console.log(params);
  return <h1>This is a product {params.productId}</h1>;
}
