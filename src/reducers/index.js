// combine all reducers into one
import { combineReducers } from "redux";

import addReducer from "./addReducer";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";

export default combineReducers({
  add: addReducer,
  alert: alertReducer,
  auth: authReducer
});
