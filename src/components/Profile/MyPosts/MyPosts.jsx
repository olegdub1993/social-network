import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { FormControl, Textarea } from "../../common/FormsContols/FormsControls";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
const maxLength120 = maxLengthCreator(120);
const AddNewPostForm = (props) => {
  return (
    <form className={styles.myPosts__form} onSubmit={props.handleSubmit}>
      <Field
        placeholder="typ something..."
        name="newPostText"
        typeField="textarea"
        component={FormControl}
        validate={[required, maxLength120]}
      />
      <button>Public</button>
    </form>
  );
};
const MyPostReduxForm = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post text={p.text} key={p.id} likes={p.likesCount} avatar={p.avatar} />
  ));
  let addNewPost = (data) => {
    props.addPost(data.newPostText);
    data.newPostText = "";
  };
  return (
    <div className={styles.myPosts}>
      <div className={styles.myPosts__title}>My posts</div>
      <MyPostReduxForm onSubmit={addNewPost} />
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
