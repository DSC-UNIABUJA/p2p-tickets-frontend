import { SET_ALERT } from "./types";
import { REMOVE_ALERT } from "./types";
import uuid from "uuid";

export const setAlert = (message, type, id = uuid.v4()) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: {
      message,
      type,
      id
    }
  });
};

export const removeAlert = id => dispatch => {
  dispatch({
    type: REMOVE_ALERT
  });
};
