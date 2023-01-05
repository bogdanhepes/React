import { combineReducers } from "redux";
import  products  from "./reducers/ProductsReducer";

export const rootReducer = combineReducers({
  // users: usersReducer,
  products
});
