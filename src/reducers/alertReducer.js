import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  alert: []
};

let newAlert = [...initialState.alert];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      newAlert = [...state.alert];
      newAlert.unshift(action.payload);
      return {
        ...state,
        alert: newAlert
      };
    case REMOVE_ALERT:
      newAlert = [...state.alert];
      return {
        ...state,
        alert: newAlert.filter(elem => elem.id !== action.payload)
      };

    default:
      return state;
  }
};
