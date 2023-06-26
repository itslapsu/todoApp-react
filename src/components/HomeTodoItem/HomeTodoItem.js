import React from "react";
import styles from "./HomeTodoItem.module.css";

import { ReactComponent as FavoriteIcon } from "../../assets/svg/favorite.svg";
import { ReactComponent as DeleteIcon } from "../../assets/svg/delete.svg";

export default function HomeTodoItem({ todo, todos, setTodos }) {
  const checkBoxRef = React.useRef();
  const blockRef = React.useRef();

  const checkBoxClassName = todo.isDone ? styles.checkBoxActive : {};

  const toggleTodo = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, isDone: !t.isDone };
      }
      return t;
    });

    setTodos(updatedTodos);
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, inFavorite: !t.inFavorite };
      }
      return t;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (e) => {
    e.preventDefault();
    blockRef.current.className = `${styles.block} ${styles.delete}`;

    return setTimeout(() => {
      const updatedTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(updatedTodos);
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
