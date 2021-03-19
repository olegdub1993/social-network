import avatar from "./../assets/img/logo.png";
const SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
  dialogs: [
    { id: 1, name: "Tedya", avatar: avatar },
    { id: 2, name: "Dleg", avatar: avatar },
    { id: 3, name: "Bleg", avatar: avatar },
    { id: 4, name: "oleg", avatar: avatar },
  ],
  messages: [
    { id: 1, message: "Whats up" },
    { id: 2, message: "What's up" },
    { id: 3, message: "Whats " },
    { id: 4, message: "Whats up" },
  ],
};
const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case SEND_MESSAGE:
      stateCopy = {
        ...state,
        messages: [
          ...state.messages,
          { id: 5, message: action.newMessageBody },
        ],
      };

      return stateCopy;

    default:
      return state;
  }
};
export const sendMessage = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
