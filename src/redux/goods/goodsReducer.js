export const goodsListReducer = (
  state = { activeId: "", items: [] },
  action
) => {
  console.log("sate", state);
  switch (action.type) {
    case "goods/setActiveId":
      return { ...state, activeId: action.payload };

    default:
      return state;
  }
};
