export const electronicAction = (data, dispatch) => {
  dispatch({
    type: "ELECTRONICS",
    payload: data,
  });
};
