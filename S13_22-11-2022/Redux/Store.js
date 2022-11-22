import { legacy_createStore } from "redux";
import myReducer from "./reducer.js";

export const myStore = legacy_createStore(myReducer);
