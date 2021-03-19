import React from "react";
import styles from "./Header.module.css";
import logo from "./../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="Logo" />
      </div>
      {props.isAuth ? (
        <div>
          {" "}
          <span>{props.login}</span>{" "}
          <span className={styles.header__logout} onClick={props.logout}>
            Logout
          </span>
        </div>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </header>
  );
};
export default Header;
