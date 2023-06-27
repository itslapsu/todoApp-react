import styles from "./HomeTodo.module.css";

import HomeTodoItem from "../HomeTodoItem/HomeTodoItem";

export default function HomeTodo({ todos, setTodos, completed }) {
  let hasItemsToShow = false;

  const renderedItems = todos.map((todo) => {
    if (completed === 1 && !todo.isDone) {
      return null;
    } else if (completed === 2 && todo.isDone) {
      return null;
    } else if (completed === 3 && !todo.inFavorite) {
      return null;
    }

    hasItemsToShow = true;

    return (
      <HomeTodoItem
        key={todo.id}
        todo={todo}
        todos={todos}
        setTodos={setTodos}
      />
    );
  });

  const showTodos = hasItemsToShow ? (
    renderedItems
  ) : (
    <div className={styles.blockNoDisplay}>
      {todos.length === 0 ? (
        <p className={styles.textNoDisplay}>
          You don't have tasks, but you can create them. 😊
        </p>
      ) : completed === 1 ? (
        <p className={styles.textNoDisplay}>
          You don't have completed tasks. 😔
        </p>
      ) : completed === 2 ? (
        <p className={styles.textNoDisplay}>
          You don't have not completed tasks. 🥰
        </p>
      ) : completed === 3 ? (
        <p className={styles.textNoDisplay}>
          You don't have any tasks in your favorites. 🙄
        </p>
      ) : null}
    </div>
  );

  return <div className={styles.block}>{showTodos}</div>;
}
