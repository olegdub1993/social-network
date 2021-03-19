import React from "react";
import styles from "./Song.module.css";

const Song = (props) => {
  return (
    <div>
      <span>Play</span>
      <span>{props.name}</span>
    </div>
  );
};
export default Song;
