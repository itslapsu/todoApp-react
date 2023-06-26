import React from "react";
import styles from "./Home.module.css";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeSubtitle from "../../components/HomeSubtitle/HomeSubtitle";
import HomeForm from "../../components/HomeForm/HomeForm";
import HomeNavigate from "../../components/HomeNavigate/HomeNavigate";

import { Outlet } from "react-router-dom";

export default function Home({ todos, setTodos }) {
  const [unDoneTasks, setUnDoneTasks] = React.useState(0);

  const updateUnDoneTasks = () => {
    let result = 0;

    todos.map((t) => {
      if (!t.isDone) {
        result += 1;
      }

      return result;
    });

    setUnDoneTasks(result);
  };

  React.useLayoutEffect(updateUnDoneTasks);

  return (
    <div className={styles.container}>
      <HomeTitle />
      <HomeSubtitle unDoneTasks={unDoneTasks} />
      <HomeForm todos={todos} setTodos={setTodos} />
      <HomeNavigate />
      <Outlet />
    </div>
  );
}
