import { NavLink } from "react-router-dom";
import classes from "./Friend.module.css";
import React from "react";
const Friend = (props) => {
  return (
    <NavLink to={"/profile/" + props.id} className={classes.friends__item}>
      <div className={classes.friends__avatar}>
        <img
          className={classes.friends__photo}
          src={props.avatar}
          alt="avatar"
        />
      </div>
      <div className={classes.friends__name}>{props.name} </div>
    </NavLink>
  );
};
export default Friend;
