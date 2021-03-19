import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";
import avatar from "./../../assets/img/logo.png";
import Paginator from "./../common/Paginator/Paginator ";
let Users = ({
  onPageChanged,
  currentPage,
  pageSize,
  totalUsersCount,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div className={styles.users}>
        {users.map((u) => (
          <User
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
            user={u}
            key={u.id}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default Users;
