import { ADD } from "../actions/types";

const initialState = {
  sum: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        sum: state.sum + action.payload
      };

    default:
      return state;
  }
};
