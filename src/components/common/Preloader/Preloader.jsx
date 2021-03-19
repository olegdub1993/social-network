import React from "react";
import styles from "./Preloader.module.css";
import preloader from "./../../../assets/img/preloader.svg";
const Preloader = () => {
  return (
    <div className={styles.preloader} style={{ backgroundColor: "none" }}>
      <div>
        <img src={preloader} alt="preloader" />
      </div>
    </div>
  );
};
export default Preloader;
