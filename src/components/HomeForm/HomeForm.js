import React from "react";
import styles from "./HomeForm.module.css";
import { useNavigate } from "react-router-dom";

import { ReactComponent as AddIcon } from "../../assets/svg/add.svg";

export default function HomeForm({ todos, setTodos }) {
  const inputRef = React.useRef();
  const navigate = useNavigate();

  const addTodo = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: inputRef.current.value,
      isDone: false,
      inFavorite: false,
    };

    setTodos([newTodo, ...todos]);

    navigate("/");
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className={styles.block}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add your task"
          ref={inputRef}
        />
        <button onClick={addTodo} className={styles.button}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}
