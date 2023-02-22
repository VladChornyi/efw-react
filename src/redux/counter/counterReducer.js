export const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, counter: state.counter + action.payload };
    case "minus":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
