import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import avatar from "./../assets/img/logo.png";
const SET_USER_DATA = "SET_USER_DATA";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authRuducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default authRuducer;
const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthData = () => async (dispatch) => {
  try {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  } catch {
    // dispatch(setAuthUserData(1, "olegDub@gmail", "Oleg Dub", true));
  }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  try {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      debugger;
      dispatch(getAuthData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      let action = stopSubmit("login", { _error: message });
      dispatch(action);
    }
  } catch {
    // let action = stopSubmit("login", { _error: "email is wrong" });
    // dispatch(action);
    dispatch(setAuthUserData(1, "olegDub@gmail", "Oleg Dub", true));
  }
};
export const logout = () => (dispatch) => {
  authAPI
    .logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
    .catch(() => {
      dispatch(setAuthUserData(null, null, null, false));
    });
};
