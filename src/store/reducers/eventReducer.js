import {GET_EVENTS, GET_EVENTS_ERROR} from "../actions/types";

const initialState = {
	allEvents: null,
	errMsg: "",
};

export default (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case GET_EVENTS:
			return {
				...state,
				allEvents: action.payload,
			};
		case GET_EVENTS_ERROR:
			return {
				...state,
				// errMsg: String(payload).match(/^5/)
				// 	? "Something went wrong. Please bear with us."
				// 	: "Oops, Network Error. Please try again"
				errMsg: "oops, something went wrong..",
			};
		default:
			return state;
	}
};
