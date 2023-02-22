import { createStore } from "redux";

const reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "plus":
      return { ...state, counter: state.counter + action.payload };
    case "minus":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export const actionPlus = (payload=1) => {
return {type: 'plus', payload}
}

 export const actionMinus = (payload=1) => {
    return {type: 'minus', payload}
    }

export const store = createStore(reducer, { counter: 0, test: [] });
// console.log(store.getState());
// console.log(store.dispatch(actionPlus(5)));
// console.log(store.getState());

// console.log(store.dispatch(actionMinus(10)));
// console.log(store.getState());

// console.log(store.dispatch(actionPlus(15)));
// console.log(store.getState());
