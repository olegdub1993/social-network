import { friendsAPI } from "../api/api";
import avatar from "./../assets/img/1.jpg";
import avatar2 from "./../assets/img/2.jpg";
import avatar3 from "./../assets/img/3.jpg";
import avatar4 from "./../assets/img/4.jpg";
const SET_FRIENDS = "SET-FRIENDS";
let initialState = {
  friends: [],
};
const sidebarRuducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return { ...state, friends: action.friends };

    default:
      return state;
  }
};
export default sidebarRuducer;
export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const requestFriends = () => (dispatch) => {
  friendsAPI
    .getFriends()
    .then((response) => {
      dispatch(setFriends(response.data.items));
    })
    .catch(() => {
      dispatch(
        setFriends([
          {
            id: 5,
            followed: true,
            name: "John  Bluck",
            avatar: avatar2,
            status: "hey",
            photos: { small: avatar2, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 6,
            followed: true,
            name: "Olga Ben",
            avatar: avatar,
            status: "hey",
            photos: { small: avatar, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 7,
            followed: false,
            name: "Alina Franco",
            avatar: avatar3,
            status: "hey",
            photos: { small: null, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 8,
            followed: true,
            name: "Anna Hymen",
            avatar: avatar4,
            status: "hey",
            photos: { small: avatar, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
        ])
      );
    });
};
