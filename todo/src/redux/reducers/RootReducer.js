import { combineReducers } from "redux";

import auth from "./auth";
import message from "./message";
import tasks from "./tasks";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  auth,
  message,
  tasks,
  form: formReducer,
});
