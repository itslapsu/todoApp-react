import React from "react";
import styles from "./HomeForm.module.css";
import { useNavigate } from "react-router-dom";

import { ReactComponent as AddIcon } from "../../assets/svg/add.svg";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { app, auth } from "../../Auth";
import { useAuthState } from "react-firebase-hooks/auth";

const firestore = getFirestore(app);

// // Получение ссылки на коллекцию
const myCollectionRef = collection(firestore, "todos");

export default function HomeForm({ noDisplayRef }) {
  const [user] = useAuthState(auth);

  const inputRef = React.useRef();
  const navigate = useNavigate();

  const addTodo = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim() === "") return;
    if (!user) return;

    const newTodo = {
      id: Date.now(),
      user: user.uid,
      title: inputRef.current.value,
      isDone: false,
      inFavorite: false,
    };

    addDoc(myCollectionRef, newTodo);
    // setTodos([newTodo, ...todos]);

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
