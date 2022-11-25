export const productActionCreator = () => {
  return (dispatch, getState) => {
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

    if (getState().productReducer.electronics.length === 0) {
      getElectronicData();
    }
  };
};
