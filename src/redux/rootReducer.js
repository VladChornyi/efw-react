import { combineReducers } from "redux";
import { authReducer } from "./auth/authSlice";
import { boysReducer } from "./boys/boysReducer";
import { counterReducer } from "./counter/counterReducer";
import { goodsListReducer } from "./goods/goodsReducer";
import { starWarsReducer } from "./starWars/starWarsSlice";
import { usersReducer } from "./users/usersSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
  key: "token",
  storage,
  blacklist:['isLoading','error']
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  counter: counterReducer,
  goodsList: goodsListReducer,
  boys: boysReducer,
  starWars: starWarsReducer,
  users: usersReducer,
  auth: persistedReducer,
});
