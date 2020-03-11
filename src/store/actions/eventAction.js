import { GET_EVENTS, GET_EVENTS_ERROR } from "./types";
import axios from "axios";

export const getEvents = () => async dispatch => {
	try {
		const res = await axios.get(
			"http://api.github.com/users/eronmmer/followers"
		);
		dispatch({
			type: GET_EVENTS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: GET_EVENTS_ERROR,
			// payload: err.response.status
			payload: err.message
		});
	}
};
