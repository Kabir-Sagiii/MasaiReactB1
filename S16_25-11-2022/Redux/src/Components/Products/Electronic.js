import React, { useEffect } from "react";
import { electronicAction } from "../../Actions/productActions";
import { productActionCreator } from "../../ActionCreator/productActionCreator";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Electronic(props) {
  const dispatch = useDispatch();
  const electronicData = useSelector((storeData) => {
    return storeData.productReducer.electronics;
  });

  useEffect(() => {
    // electronicAction(dispatch);
    let actionCreator = bindActionCreators(productActionCreator, dispatch);
    actionCreator();
  }, []);

  return (
    <div>
      <h2>Electronic Product Titles</h2>
      {electronicData.length > 0 ? (
        <ul>
          {electronicData.map((ele, i) => {
            return (
              <Link style={{ color: "blue" }} to={`/productDetails/${ele.id}`}>
                <li
                  style={{ marginBottom: "20px", listStyle: "none" }}
                  key={i + 1}
                >
                  {ele.title}
                </li>
              </Link>
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
