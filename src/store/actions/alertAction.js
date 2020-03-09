import { SET_ALERT } from "./types";
import { REMOVE_ALERT } from "./types";
import * as uuid from "uuid"

export const setAlert = (message, type, timeout = 5000) => dispatch => {
  let id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {
      message,
      type,
      id
    }
  } );
  
  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id
    });
  }, timeout);
};
