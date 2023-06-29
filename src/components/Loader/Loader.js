import React from "react";
import styles from "./Loader.module.css";
import { ReactComponent as LoaderIcon } from "../../assets/svg/loader.svg";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <LoaderIcon className={styles.loaderIcon} />
    </div>
  );
}
