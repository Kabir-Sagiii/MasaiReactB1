import { myStore } from "./Redux/Store.js";
import { myAction } from "./Redux/action.js";

var storeData = myStore.getState();
console.log(storeData);

myAction(1);

var storeData = myStore.getState();
console.log(storeData);
