import React from "react";
import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Page not found!</p>
      <Link className={styles.link} to="/">
        Home
      </Link>
    </div>
  );
}
