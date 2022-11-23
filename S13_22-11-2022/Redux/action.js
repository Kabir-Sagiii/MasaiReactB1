import { myStore } from "./Store.js";

export const incCountAction = (data) => {
  //data = 1

  myStore.dispatch({
    type: "INC_COUNT",
    info: data,
  });
};

export const decCountAction = (data) => {
  //data = 2
  myStore.dispatch({
    type: "DEC_COUNT",
    info: data,
  });
};
