import React from "react";
import styles from "./Settings.module.css";
import logo from "./../../assets/img/logo.png";
const Settings = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div>Settings</div>
    </header>
  );
};
export default Settings;
