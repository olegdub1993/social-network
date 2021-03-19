import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
import avatar from "./../assets/img/1.jpg";
import avatar2 from "./../assets/img/2.jpg";
import avatar3 from "./../assets/img/3.jpg";
import avatar4 from "./../assets/img/4.jpg";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "CHANGE-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING ";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS ";
let initialState = {
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  users: [],
  isFetching: false,
  followingInProgress: [],
};
const usersRuducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
        // state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.inProgress
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter((id) => id !== action.userId)],
      };
    default:
      return state;
  }
};
export default usersRuducer;
export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setUsers = (data) => {
  return {
    type: SET_USERS,
    users: data,
  };
};
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (inProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  inProgress,
  userId,
});
export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  try {
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
  } catch {
    setTimeout(() => {
      dispatch(
        setUsers([
          {
            id: 1,
            followed: false,
            name: "Oleg Dub",
            avatar: avatar,
            status: "hey",
            photos: { small: avatar2, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 2,
            followed: true,
            name: "Lilia Dub",
            avatar: avatar,
            status: "hey",
            photos: { small: avatar, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 3,
            followed: false,
            name: "Stefa Dub",
            avatar: avatar,
            status: "hey",
            photos: { small: avatar, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 4,
            followed: true,
            name: " Vasuk Dub",
            avatar: avatar2,
            status: "hey",
            photos: { small: avatar2, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 5,
            followed: true,
            name: "John  Bluck",
            status: "Whats up, i am I am John",
            photos: { small: avatar2, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 6,
            followed: true,
            name: "Olga Ben ",
            status: "Hello from Olga",
            photos: { small: avatar, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 7,
            followed: false,
            name: "Andriy  Franco",
            status: "My name is Andriy",
            photos: { small: null, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
          {
            id: 8,
            followed: true,
            name: "Pavlo Hymen",
            status: "Hey, i am Pavlo",
            photos: { small: avatar3, large: null },
            location: { country: "Ukraine", city: "lviv" },
          },
        ])
      );
      dispatch(setTotalUsersCount(500));
      dispatch(toggleIsFetching(false));
    }, 500);
  }
};
const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  try {
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
  } catch {
    setTimeout(() => {
      dispatch(actionCreator(userId));
      dispatch(toggleIsFollowingProgress(false, userId));
    }, 1000);
  }
};
export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    unfollowSuccess
  );
};

export const follow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  let actionCreator = followSuccess;
  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);

  // .catch(() => {
  //   setTimeout(() => {
  //     dispatch(follow(userId));
  //     dispatch(toggleIsFollowingProgress(false, userId));
  //   }, 4000);
  // });
};
