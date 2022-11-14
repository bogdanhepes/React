import { combineReducers } from "redux";

import auth from "./auth";
import message from "./message";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  auth,
  message,
  form: formReducer,
});
