import { myStore } from "./Store.js";
export const myAction = (data) => {
  myStore.dispatch(data);
};
