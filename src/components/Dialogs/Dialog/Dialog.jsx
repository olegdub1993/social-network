import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.css";

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog}>
      <div className={styles.dialog__avatar}>
        <img src={props.avatar} alt="avatar" />
      </div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
export default Dialog;
