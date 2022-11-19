import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails(props) {
  const { id } = useParams();
  const [state, setState] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
    category: "",
  });

  useEffect(() => {
    getProductInfo();
  }, []);

  const getProductInfo = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  };

  return (
    <div className="productDContainer">
      <div className="topPanel">
        <h2>{state.category} Category</h2>
      </div>
      <div className="leftPanel">
        <img src={state.image} width="100%" height="100%" />
      </div>
      <div className="rightPanel">
        <dl>
          <dt>Product Name</dt>
          <dd>{state.title}</dd>
          <dt>Product Price</dt>
          <dd>$ {state.price}</dd>
          <dt>Product Description</dt>
          <dd>{state.description}</dd>
          <dt>Product Rating</dt>
          <dd>{state.rating.rate}</dd>
        </dl>
      </div>
    </div>
  );
}

export default ProductDetails;
