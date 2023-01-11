import { combineReducers } from "redux";

import subjects from "./reducers/subjects";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  subjects,
  form: formReducer,
});
