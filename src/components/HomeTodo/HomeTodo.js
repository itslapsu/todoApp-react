import styles from "./HomeTodo.module.css";
import { useMemo, createContext, useRef } from "react";
import HomeTodoItem from "../HomeTodoItem/HomeTodoItem";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, myCollectionRef } from "../../Auth";
import { query, where } from "firebase/firestore";
import Loader from "../Loader/Loader";

export const NoDisplayRefContext = createContext();

export default function HomeTodo({ completed }) {
  let hasItemsToShow = false;

  const [user] = useAuthState(auth);

  const noDisplayRef = useRef();

  const filteredQuery = useMemo(
    () => query(myCollectionRef, where("user", "==", user?.uid || "")),
    [user?.uid]
  );
  const [snapshot, loading] = useCollection(filteredQuery);
  console.log(snapshot);

  if (!user) {
    return (
      <NoDisplayRefContext.Provider noDisplayRef={noDisplayRef}>
        <div ref={noDisplayRef} className={styles.block}>
          <p className={styles.textNoDisplay}>
            You don't have tasks, log in to create one. 🙄
          </p>
        </div>
      </NoDisplayRefContext.Provider>
    );
  }

  let data = [];
  snapshot && snapshot.docs.map((doc) => data.push(doc.data()));
  data.sort((a, b) => b.id - a.id);

  if (loading)
    return (
      <div className={styles.block}>
        <Loader />
      </div>
    );

  const renderedItems = data.map((todo) => {
    if (completed === 1 && !todo.isDone) {
      return null;
    } else if (completed === 2 && todo.isDone) {
      return null;
    } else if (completed === 3 && !todo.inFavorite) {
      return null;
    }

    hasItemsToShow = true;

    return <HomeTodoItem key={todo.id} todo={todo} todos={data} />;
  });

  const showTodos = hasItemsToShow ? (
    renderedItems
  ) : (
    <div className={styles.blockNoDisplay}>
      {data.length === 0 ? (
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
