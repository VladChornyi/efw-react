import { combineReducers } from "redux";
import { boysReducer } from "./boys/boysReducer";
import { counterReducer } from "./counter/counterReducer";
import { goodsListReducer } from "./goods/goodsReducer";


export const rootReducer = combineReducers({
  counter: counterReducer,
  goodsList: goodsListReducer,
  boys: boysReducer,
});
