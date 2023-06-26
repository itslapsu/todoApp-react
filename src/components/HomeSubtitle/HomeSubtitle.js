import React from "react";
import styles from "./HomeSubtitle.module.css";

export default function HomeSubtitle({ unDoneTasks }) {
  return (
    <div className={styles.block}>
      <p className={styles.subtitle}>
        {`You've got ${unDoneTasks} tasks coming up in the next days.`}
      </p>
    </div>
  );
}
