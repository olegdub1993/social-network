import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";
import avatar from "./../../assets/img/logo.png";
import * as axios from "axios";
const Users = (props) => {
  alert("hey");
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("").then((response) => {
        props.setUsers(response.data.items);
      });
      props.setUsers([
        {
          id: 1,
          followed: true,
          name: "dleg",
          avatar: avatar,
          status: "hey",
          photos: { small: avatar, large: null },
          location: { country: "Ukraine", city: "lviv" },
        },
        {
          id: 2,
          followed: true,
          name: "Dleg",
          avatar: avatar,
          status: "hey",
          photos: { small: avatar, large: null },
          location: { country: "Ukraine", city: "lviv" },
        },
        {
          id: 3,
          followed: false,
          name: "Bleg",
          avatar: avatar,
          status: "hey",
          photos: { small: null, large: null },
          location: { country: "Ukraine", city: "lviv" },
        },
        {
          id: 4,
          followed: true,
          name: "oleg",
          avatar: avatar,
          status: "hey",
          photos: { small: avatar, large: null },
          location: { country: "Ukraine", city: "lviv" },
        },
      ]);
    }
  };
  let users = props.users.map((u) => (
    <User
      follow={props.follow}
      unfollow={props.unfollow}
      name={u.name}
      key={u.id}
      id={u.id}
      avatar={u.photos.small}
      followed={u.followed}
    />
  ));
  let pages = props.pages.map((p) => <span key={p}>{p}</span>);

  return (
    <div>
      <button onClick={getUsers}>getUsers</button>
      <div>{pages}</div>
      <div className={styles.users}>{users} </div>
    </div>
  );
};
export default Users;
