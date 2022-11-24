import { legacy_createStore as createStore, combineReducers } from "redux";
import userReducer from "../Reducers/userReducer";

import productReducer from "../Reducers/productReducer";

const combinedReducer = combineReducers({
  userReducer,
  productReducer,
});

export const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
