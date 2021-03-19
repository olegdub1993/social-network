import React from "react";
import styles from "./News.module.css";
import logo from "./../../assets/img/logo.png";
import withAuthRedirect from "../../hoc/withAuthRedirect";
const News = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div>News</div>
    </header>
  );
};
export default withAuthRedirect(News);
