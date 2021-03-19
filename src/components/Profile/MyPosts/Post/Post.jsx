import React from "react";
import styles from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={styles.post}>
      <div>
        <div className={styles.post__avatar}>
          <img src={props.avatar} alt="" />
        </div>
        like: <span>{props.likes}</span>
      </div>
      <div className={styles.post}>{props.text}</div>
    </div>
  );
};
export default Post;
