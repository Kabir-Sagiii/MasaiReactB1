import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "../Reducers/userReducer";

import productReducer from "../Reducers/productReducer";
import logger from "redux-logger";

const combinedReducer = combineReducers({
  userReducer,
  productReducer,
});

export const store = createStore(
  combinedReducer,
  applyMiddleware(thunk, logger)
);
