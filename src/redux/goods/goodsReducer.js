export const goodsListReducer = (
  state = { activeId: "", items: [] },
  action
) => {
  switch (action.type) {
    case "goods/setActiveId":
      return { ...state, activeId: action.payload };

    default:
      return state;
  }
};
