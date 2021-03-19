import styles from "./Sidebar.module.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <Navbar />
      <FriendsContainer />
    </div>
  );
};
export default Sidebar;
