import styles from "./Navbar.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink
            className={styles.nav__link}
            activeClassName={styles.active}
            to="/profile"
          >
            Profile{" "}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={styles.nav__link}
            activeClassName={styles.active}
            to="/dialogs"
          >
            Messages{" "}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={styles.nav__link}
            activeClassName={styles.active}
            to="/news"
          >
            News{" "}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={styles.nav__link}
            activeClassName={styles.active}
            to="/music"
          >
            Music{" "}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={styles.nav__link}
            activeClassName={styles.active}
            to="/users"
          >
            Users{" "}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={styles.nav__link}
            activeClassName={styles.active}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
