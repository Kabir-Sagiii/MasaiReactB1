import React, { useEffect } from "react";
import { electronicAction } from "../../Actions/productActions";
import { useDispatch, useSelector } from "react-redux";

function Electronic(props) {
  const dispatch = useDispatch();
  const electronicData = useSelector((storeData) => {
    return storeData.productReducer.electronics;
  });
  useEffect(() => {
    getElectronicData();
  }, []);

  const getElectronicData = () => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        electronicAction(data, dispatch);
      });
  };

  return (
    <div>
      <h2>Electronic Product Details</h2>
      {electronicData.length > 0 ? (
        <ul>
          {electronicData.map((ele, i) => {
            return (
              <li
                style={{ marginBottom: "20px", listStyle: "none" }}
                key={i + 1}
              >
                {ele.title}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <h1>Data is Not Available</h1>
        </div>
      )}
    </div>
  );
}

export default Electronic;
