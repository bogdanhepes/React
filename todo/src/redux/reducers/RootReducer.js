import { combineReducers } from "redux";

import auth from "./auth";
import message from "./message";
import tasks from "./tasks";
import user from "./user";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  auth,
  message,
  tasks,
  user,
  form: formReducer,
});
