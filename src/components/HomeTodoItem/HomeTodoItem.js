import React from "react";
import styles from "./HomeTodoItem.module.css";

import { ReactComponent as FavoriteIcon } from "../../assets/svg/favorite.svg";
import { ReactComponent as DeleteIcon } from "../../assets/svg/delete.svg";
import {
  query,
  where,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { myCollectionRef } from "../../Auth";

export default function HomeTodoItem({ todo, todos, setTodos }) {
  const checkBoxRef = React.useRef();
  const blockRef = React.useRef();
  const favoriteRef = React.useRef();

  let antiFlood = false;

  const checkBoxClassName = todo.isDone ? styles.checkBoxActive : {};
  const filteredQuery = query(myCollectionRef, where("id", "==", todo.id));

  const toggleTodo = async (e) => {
    e.preventDefault();

    if (antiFlood) return;
    antiFlood = true;

    checkBoxRef.current.classList.toggle(styles.checkBoxActive);

    const querySnapshot = await getDocs(filteredQuery);

    return setTimeout(() => {
      querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, { isDone: !todo.isDone });
      });
      antiFlood = false;
    }, 300);
  };

  const toggleFavorite = async (e) => {
    e.preventDefault();

    if (antiFlood) return;
    antiFlood = true;

    favoriteRef.current.classList.toggle(styles.favoriteActive);

    const querySnapshot = await getDocs(filteredQuery);

    return setTimeout(() => {
      querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, { inFavorite: !todo.inFavorite });
      });
      antiFlood = false;
    }, 300);
  };

  const deleteTodo = async (e) => {
    e.preventDefault();
    blockRef.current.classList.add(styles.delete);

    const querySnapshot = await getDocs(filteredQuery);

    return setTimeout(() => {
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    }, 300);
  };

  return (
    <div ref={blockRef} className={styles.block}>
      <div className={styles.content}>
        <span
          ref={checkBoxRef}
          className={`${styles.checkBox} ${checkBoxClassName}`}
          onClick={toggleTodo}
        ></span>
        <div className={styles.contentBlock}>
          <p className={styles.title}>{todo.title}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <FavoriteIcon
          ref={favoriteRef}
          className={`${styles.favorite} ${
            todo.inFavorite ? styles.favoriteActive : ""
          }`}
          onClick={toggleFavorite}
        />
        <a className={styles.buttonDel} onClick={deleteTodo} href="/">
          <DeleteIcon className={styles.deleteIcon} />
        </a>
      </div>
    </div>
  );
}
