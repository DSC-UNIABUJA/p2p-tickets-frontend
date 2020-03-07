// combine all reducers into one
import { combineReducers } from "redux";

import addReducer from "./addReducer";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import eventReducer from "./eventReducer"

export default combineReducers({
  sum: addReducer,
  alert: alertReducer,
  auth: authReducer,
  events: eventReducer
});
