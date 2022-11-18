import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Electronic(props) {
  const [electronicData, setElectronicData] = useState([]);
  useEffect(() => {
    getElectronicData();
  }, []);

  const getElectronicData = () => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setElectronicData(data);
      });
  };
  return (
    <div>
      {electronicData.length > 0 ? (
        <div style={{ padding: "30px" }}>
          <ul>
            {electronicData.map((data) => {
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
          <h2>Data is not Available</h2>
        </div>
      )}
    </div>
  );
}

export default Electronic;
