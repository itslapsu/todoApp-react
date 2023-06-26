import React from "react";
import styles from "./HomeNavigate.module.css";
import { NavLink } from "react-router-dom";

import { ReactComponent as CompletedIcon } from "../../assets/svg/complete.svg";
import { ReactComponent as UnCompletedIcon } from "../../assets/svg/uncomplete.svg";
import { ReactComponent as AllIcon } from "../../assets/svg/all.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/svg/favorite.svg";

export default function HomeNavigate() {
  return (
    <div className={styles.block}>
      <NavLink
        className={`${styles.link} ${styles.image}`}
        style={({ isActive }) =>
          isActive ? { borderBottom: "2px solid #fefefe" } : {}
        }
        to={"/"}
      >
        <AllIcon className={styles.svgIcon} />
      </NavLink>
      <NavLink
        className={`${styles.link} ${styles.image}`}
        style={({ isActive }) =>
          isActive ? { borderBottom: "2px solid #fefefe" } : {}
        }
        to={"/uncompleted"}
      >
        <UnCompletedIcon className={styles.svgIcon} />
      </NavLink>
      <NavLink
        className={`${styles.link} ${styles.image}`}
        style={({ isActive }) =>
          isActive ? { borderBottom: "2px solid #fefefe" } : {}
        }
        to={"/completed"}
      >
        <CompletedIcon className={styles.svgIcon} />
      </NavLink>
      <NavLink
        className={`${styles.link} ${styles.image}`}
        style={({ isActive }) =>
          isActive ? { borderBottom: "2px solid #fefefe" } : {}
        }
        to={"/favorite"}
      >
        <FavoriteIcon className={styles.svgIcon} />
      </NavLink>
    </div>
  );
}
