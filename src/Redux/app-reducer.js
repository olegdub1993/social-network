import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import avatar from "./../assets/img/logo.png";
import { getAuthData } from "./auth-reducer";
const SET_INITIALIZED = "SET-INITIALIZED";
let initialState = {
  initialized: false,
};
const appRuducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: true };
    default:
      return state;
  }
};
export default appRuducer;
const initializedSuccess = () => ({
  type: SET_INITIALIZED,
});

export const initialize = () => (dispatch) => {
  let promise = dispatch(getAuthData());
  // let promise2 = dispatch(something else());
  // Promise.all([promise,promise2]).then()
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};
