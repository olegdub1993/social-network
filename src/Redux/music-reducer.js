import { musicAPI } from "../api/api";

const SET_MUSIC = "SET-MUSIC";
let initialState = {
  songs: [],
};
const musicRuducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC:
      return { ...state, songs: action.songs };

    default:
      return state;
  }
};
export default musicRuducer;
const setMusic = (songs) => ({ type: SET_MUSIC, songs });
export const getMusic = () => (dispatch) => {
  musicAPI
    .getMusic()
    .then((response) => {
      dispatch(setMusic(response.data));
    })
    .catch(() => {
      setTimeout(() => {
        dispatch(
          setMusic([
            { name: "i will love" },
            { name: "i adf" },
            { name: "it is my life" },
          ])
        );
      }, 3000);
    });
};
