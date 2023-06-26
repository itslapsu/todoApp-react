import React from "react";
import styles from "./HomeNavigate.module.css";
import { NavLink } from "react-router-dom";

export default function HomeNavigate() {
  return (
    <div className={styles.block}>
      <NavLink
        className={`${styles.link}`}
        style={({ isActive }) =>
          isActive ? { borderBottom: "2px solid #fefefe" } : {}
        }
        to={"/"}
      >
        All
      </NavLink>
      <NavLink
        className={`${styles.link}`}
        style={({ isActive }) =>
          isActive ? { borderBottom: "2px solid #fefefe" } : {}
        }
        to={"/uncompleted"}
      >
        Uncompleted
      </NavLink>
      <NavLink
        className={`${styles.link}`}
        style={({ isActive }) =>
          isActive ? { borderBottom: "2px solid #fefefe" } : {}
        }
        to={"/completed"}
      >
        Completed
      </NavLink>
    </div>
  );
}
