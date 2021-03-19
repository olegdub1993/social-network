import React from "react";
import styles from "./User.module.css";
import userPhoto from "./../../../assets/img/user.png";
import { NavLink } from "react-router-dom";
const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div className={styles.user}>
      <div>
        <NavLink to={"/profile/" + user.id} className={styles.user__avatar}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto}
            alt="avatar"
          />
        </NavLink>
        {user.followed ? (
          <button
            className={styles.user__follow}
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            {" "}
            unfollow
          </button>
        ) : (
          <button
            className={styles.user__follow}
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            {" "}
            follow
          </button>
        )}
      </div>
      <div className={styles.user__name}>{user.name} </div>
    </div>
  );
};
export default User;
