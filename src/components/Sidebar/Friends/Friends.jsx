import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";
import React from "react";
import Friend from "./Friend/Friend";
const Friends = (props) => {
  let friendsElements = props.friends.map((f) => {
    return <Friend avatar={f.avatar} name={f.name} key={f.id} id={f.id} />;
  });
  return (
    <div className={classes.friends}>
      <h2 className={classes.friends__title}>Friends</h2>
      {friendsElements}
    </div>
  );
};
export default Friends;
