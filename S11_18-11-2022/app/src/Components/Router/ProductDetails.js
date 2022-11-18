import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { id } = useParams();
  const [state, setState] = useState({});

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
    <div style={{ color: "green", fontSize: "40px" }}>
      {Object.keys(state).length > 0 ? (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h2>Product Details Component</h2>
          <img src={state.image} alt="product image" width="300" height="300" />
          <br />
          <button>Back to Category</button>
        </div>
      ) : (
        <h2>No Data</h2>
      )}
    </div>
  );
}

export default ProductDetails;
