import { GET_EVENTS, NETWORK_ERROR } from "./types";
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
      type: NETWORK_ERROR,
      payload: err.message
    });
  }
};
