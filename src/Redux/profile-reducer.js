import { profileAPI } from "../api/api";
import avatar from "./../assets/img/1.jpg";
import avatar2 from "./../assets/img/2.jpg";
import avatar3 from "./../assets/img/3.jpg";
import avatar4 from "./../assets/img/4.jpg";
const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "UPDATE-STATUS-TEXT";
let initialState = {
  posts: [
    { id: 1, text: "What's up?", avatar: avatar, likesCount: 23 },
    { id: 2, text: "Hello, man", avatar: avatar2, likesCount: 63 },
    { id: 3, text: "Hi, my friend", avatar: avatar3, likesCount: 83 },
  ],
  profile: null,
  statusText: "",
};
const profileRuducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 4,
        text: action.newPostText,
        avatar: avatar4,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, post],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.id),
      };
    // newState.posts = [...state.posts];
    // newState.posts.push(post);
    // newState.newPostText= "" ;
    // return stateCopy;

    case SET_STATUS:
      return { ...state, statusText: action.status };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};
export const addPostAC = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const deletePostAC = (id) => ({
  type: DELETE_POST,
  id,
});
const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const requestUserProfile = (userId) => async (dispatch) => {
  try {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
  } catch {
    setTimeout(() => {
      let array = [
        {
          fullName: "Oleg Dub",
          id: 1,
          photos: { small: null, large: avatar2 },
        },
        {
          fullName: "Lilia Dub",
          id: 2,
          photos: { small: null, large: avatar },
        },
        {
          fullName: "Stefa Dub",
          id: 3,
          photos: { small: null, large: avatar },
        },
        {
          fullName: "Vasuk Dub",
          id: 4,
          photos: { small: null, large: avatar2 },
        },
        {
          id: 5,
          followed: true,
          fullName: "John  Bluck",
          status: "Whats up, i am I am John",
          photos: { small: avatar, large: null },
          location: { country: "Ukraine", city: "lviv" },
        },
        {
          id: 6,
          followed: true,
          fullName: "Olga Ben ",
          status: "Hello from Olga",
          photos: { small: avatar, large: null },
          location: { country: "Ukraine", city: "lviv" },
        },
        {
          id: 7,
          followed: false,
          fullName: "Andriy  Franco",
          status: "My name is Andriy",
          photos: { small: null, large: null },
          location: { country: "Ukraine", city: "lviv" },
        },
        {
          id: 8,
          followed: true,
          fullName: "Pavlo Hymen",
          status: "Hey, i am Pavlo",
          photos: { small: avatar, large: null },
          location: { country: "Ukraine", city: "lviv" },
        },
      ];

      let userProfile = array.find((a) => a.id === +userId);
      dispatch(setUserProfile(userProfile));
    }, 500);
  }
};
export const requestUserStatus = (userId) => async (dispatch) => {
  try {
    debugger;
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  } catch {
    setTimeout(() => {
      let array = [
        {
          id: 1,
          status: "i am Oleg",
        },
        {
          id: 2,
          status: "i am Lilis",
        },
        {
          id: 3,
          status: "i am Stafa",
        },
        {
          id: 4,
          status: "i am Vasul",
        },
        {
          id: 5,
          status: "Whats up, i am Ivan",
        },
        {
          id: 6,
          status: "Hello from Olga",
        },
        {
          id: 7,
          status: "My name is Andriy",
        },
        {
          id: 8,
          status: "Hey, i am Pavlo",
        },
      ];

      let userProfile = array.find((a) => a.id === +userId);
      if (userProfile) {
        let status = userProfile.status;
        dispatch(setStatus(status));
      }
      // this.props.toggleIsFetching(false);
    }, 500);
  }
};
export const updateStatus = (status) => async (dispatch) => {
  debugger;
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch {
    setTimeout(() => {
      dispatch(setStatus(status));
    }, 500);
  }
};
export default profileRuducer;
