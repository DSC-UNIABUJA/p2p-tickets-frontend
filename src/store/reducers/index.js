// combine all reducers into one
import { combineReducers } from "redux";

import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
	alert: alertReducer,
	auth: authReducer,
	events: eventReducer
});
