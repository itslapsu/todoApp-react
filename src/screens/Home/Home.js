import React, { useMemo } from "react";
import styles from "./Home.module.css";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeSubtitle from "../../components/HomeSubtitle/HomeSubtitle";
import HomeForm from "../../components/HomeForm/HomeForm";
import HomeNavigate from "../../components/HomeNavigate/HomeNavigate";

import { Outlet } from "react-router-dom";

import { auth } from "../../Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../components/Loader/Loader";
import { query, where } from "firebase/firestore";
import { myCollectionRef } from "../../Auth";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Home() {
  const [unDoneTasks, setUnDoneTasks] = React.useState(0);
  const [user, loading] = useAuthState(auth);

  const filteredQuery = useMemo(
    () => query(myCollectionRef, where("user", "==", user?.uid || "")),
    [user?.uid]
  );
  const [snapshot] = useCollection(filteredQuery);

  let data = [];
  snapshot && snapshot.docs.map((doc) => data.push(doc.data()));

  const updateUnDoneTasks = () => {
    let result = 0;

    data.map((t) => {
      if (!t.isDone) {
        result += 1;
      }

      return result;
    });

    setUnDoneTasks(result);
  };

  React.useEffect(updateUnDoneTasks);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <HomeTitle user={user} />
      <HomeSubtitle unDoneTasks={unDoneTasks} />
      <HomeForm />
      <HomeNavigate />
      <Outlet />
    </div>
  );
}
