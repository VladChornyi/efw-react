import { createStore, combineReducers } from "redux";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer);
// console.log(store.getState());
// console.log(store.dispatch(actionPlus(5)));
// console.log(store.getState());

// console.log(store.dispatch(actionMinus(10)));
// console.log(store.getState());

// console.log(store.dispatch(actionPlus(15)));
// console.log(store.getState());
