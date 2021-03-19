import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileRuducer from "./profile-reducer";
import usersRuducer from "./users-reducer";
import sidebarRuducer from "./sidebar-reducer";
import authRuducer from "./auth-reducer";
import appRuducer from "./app-reducer";
import thunk from "redux-thunk";
import musicRuducer from "./music-reducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  sidebar: sidebarRuducer,
  profilePage: profileRuducer,
  usersPage: usersRuducer,
  auth: authRuducer,
  musicPage: musicRuducer,
  form: formReducer,
  app: appRuducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;

// export let a = 5;
// setTimeout(() => {
//   a = 10;
// }, 2000);
