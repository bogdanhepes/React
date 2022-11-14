import { combineReducers } from "redux";
import { productsReducer } from "./products/ProductsReducer";
import { usersReducer } from "./users/UsersReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
});
