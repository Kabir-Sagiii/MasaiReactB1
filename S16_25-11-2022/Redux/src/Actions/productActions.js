import { store } from "../ReduxStore/Store"; // store.getState()

export const electronicAction = (dispatch) => {
  const storeData = store.getState();

  const getElectronicData = () => {
    console.log("API is Called");
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        //  electronicAction(data, dispatch);

        dispatch({
          type: "ELECTRONICS",
          payload: data,
        });
      });
  };

  if (storeData.productReducer.electronics.length === 0) {
    getElectronicData();
  }
};
