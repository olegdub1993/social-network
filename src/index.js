import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// rerenderEntireTree();
// store.subscribe(() => {
//   rerenderEntireTree();
// });
window.store = store;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// let store = {
//   _subscriber() {
//     console.log("no subscribers (observers)");
//   },
//   _state: {
//     firstName: "oleg",
//     secondName: "dub",
//   },
//   getState() {
//     return this.state;
//   },
//   subscribe(observer) {
//     this._subscriber = observer;
//   },
//   setFirstName(value) {
//     this._state.firstName = value;
//     this._subscriber();
//   },
// };
