import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Jewelery(props) {
  const [jeweleryData, setJeweleryData] = useState([]);
  useEffect(() => {
    getJeweleryData();
  }, []);

  const getJeweleryData = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJeweleryData(data);
      });
  };
  return (
    <div>
      {jeweleryData.length > 0 ? (
        <div style={{ padding: "30px" }}>
          <ul>
            {jeweleryData.map((data) => {
              return (
                <Link
                  to={`/productdetails/${data.id}`}
                  style={{ color: "black" }}
                >
                  <li>{data.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "red" }}>
          <h2>Loading....</h2>
        </div>
      )}
    </div>
  );
}

export default Jewelery;
