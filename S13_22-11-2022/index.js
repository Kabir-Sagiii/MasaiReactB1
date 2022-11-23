import { myStore } from "./Redux/Store.js";
import { incCountAction, decCountAction } from "./Redux/action.js";

var storeData = myStore.getState();
console.log(storeData);

incCountAction(1);

var storeData = myStore.getState();
console.log(storeData);

incCountAction(10);

var storeData = myStore.getState();
console.log(storeData);

decCountAction(10);

var storeData = myStore.getState();
console.log(storeData);
