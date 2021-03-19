import avatar from "./../assets/img/logo.png";
import dialogsReducer from "./dialogs-reducer";
import profileRuducer from "./profile-reducer";
import sidebarRuducer from "./sidebar-reducer";

let store = {
  _state: {
    // profilePage: {
    //   posts: [
    //     { id: 1, text: "Halo", avatar: "", likesCount: 23 },
    //     { id: 2, text: "Hello", avatar: "", likesCount: 63 },
    //     { id: 3, text: "Hello", avatar: "", likesCount: 83 },
    //   ],
    //   newPostText: "",
    // },
    // dialogsPage: {
    //   dialogs: [
    //     { id: 1, name: "Xyu", avatar: avatar },
    //     { id: 2, name: "Dleg", avatar: avatar },
    //     { id: 3, name: "Bleg", avatar: avatar },
    //     { id: 4, name: "oleg", avatar: avatar },
    //   ],
    //   messages: [
    //     { id: 1, message: "Whats up" },
    //     { id: 2, message: "What's up" },
    //     { id: 3, message: "Whats " },
    //     { id: 4, message: "Whats up" },
    //   ],
    //   newMessageText: "",
    // },
    // sidebar: {
    //   friends: [
    //     { id: 1, name: "dleg", avatar: avatar },
    //     { id: 2, name: "Dleg", avatar: avatar },
    //     { id: 3, name: "Bleg", avatar: avatar },
    //     { id: 4, name: "oleg", avatar: avatar },
    //   ],
    // },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  // firstDispatcht(action) {
  //   this._state.profilePage = profileRuducer(undefined, action);
  //   this._state.dialogsPage = dialogsReducer(undefined, action);
  //   this._state.sidebar = sidebarRuducer(undefined, action);
  // },
  dispatch(action) {
    this._state.profilePage = profileRuducer(
      this._state.profilePage || undefined,
      action
    );
    this._state.dialogsPage = dialogsReducer(
      this._state.dialogsPage || undefined,
      action
    );
    this._state.sidebar = sidebarRuducer(
      this._state.sidebar || undefined,
      action
    );

    this._callSubscriber(this._state);
  },
};
store.dispatch({ type: "1" });
window.state = store._state;
export default store;
