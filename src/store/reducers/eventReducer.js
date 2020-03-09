import { GET_EVENTS, ASYNC_ERROR } from "../actions/types";

const initialState = {
  allEvents: null,
  errMsg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        allEvents: action.payload
      };
    case ASYNC_ERROR:
      return {
        ...state,
        allEvents: action.payload.toLowerCase() === "network error" ? action.payload : "oh, snap. Something went wrong."
      };
    default:
      return state;
  }
};
