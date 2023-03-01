import { combineReducers } from "redux";
import { userRegister } from "./auth/auth";
import { boysReducer } from "./boys/boysReducer";
import { counterReducer } from "./counter/counterReducer";
import { goodsListReducer } from "./goods/goodsReducer";
import { starWarsReducer } from "./starWars/starWarsSlice";
import { usersReducer } from "./users/usersSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  goodsList: goodsListReducer,
  boys: boysReducer,
  starWars: starWarsReducer,
  users: usersReducer,
  // auth: userRegister,
});
