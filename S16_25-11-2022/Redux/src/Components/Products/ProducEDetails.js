import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProducEDetails(props) {
  const [state, setState] = useState([]);
  const { id } = useParams();
  let electronicsData = useSelector(
    (storeData) => storeData.productReducer.electronics
  );
  useEffect(() => {
    setState(
      electronicsData.filter((ele) => {
        console.log(ele.id, id);
        return ele.id == id;
      })
    );
  }, []);

  return (
    <div>
      <h2 style={{ color: "green" }}>Product Details Component</h2>
      {state.length > 0 ? (
        <div>
          {console.log(state)}
          <img src={state[0].image} width="300" height="300" />
          <p>{state[0].title}</p>
          <p>{state[0].price}</p>
          <button>Add To Cart</button>
        </div>
      ) : (
        <div> Data is not Available</div>
      )}
    </div>
  );
}

export default ProducEDetails;
