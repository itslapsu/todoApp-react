import React from "react";
import styles from "./HomeTodo.module.css";

import HomeTodoItem from "../HomeTodoItem/HomeTodoItem";

export default function HomeTodo({ todos, setTodos, completed }) {
  return (
    <div className={styles.block}>
      {todos.map((todo) => {
        if (completed === 1 && !todo.isDone) {
          return "";
        } else if (completed === 2 && todo.isDone) {
          return "";
        } else if (completed === 3 && !todo.inFavorite) {
          return "";
        }

        return (
          <HomeTodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
}
