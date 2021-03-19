import React from "react";
import { connect } from "react-redux";
import { addPostAC } from "../../../Redux/profile-reducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let updateNewPostText = (text) => {
//           store.dispatch(updateNewPostTextAC(text));
//         };
//         let addPost = () => {
//           let action = addPostAC();
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText}
//             updateNewPostText={updateNewPostText}
//             addPost={addPost}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostAC(newPostText));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
