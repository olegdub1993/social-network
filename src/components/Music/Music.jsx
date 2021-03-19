import React from "react";
import styles from "./Music.module.css";
import logo from "./../../assets/img/logo.png";
import Song from "./Song/Song";
const Music = (props) => {
  let songs = props.songs.map((s) => <Song name={s.name} />);
  return (
    <div>
      <div>Music</div>
      <div>{songs}</div>
    </div>
  );
};
export default Music;
