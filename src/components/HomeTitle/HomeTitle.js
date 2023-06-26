import React from "react";
import styles from "./HomeTitle.module.css";

export default function HomeTitle() {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>Welcome!</h1>
    </div>
  );
}
