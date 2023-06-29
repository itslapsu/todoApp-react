import React from "react";
import styles from "./HomeTitle.module.css";
import { ReactComponent as GoogleIcon } from "../../assets/svg/google.svg";
import { auth, googleAuthProvider } from "../../Auth";
import { signInWithPopup } from "firebase/auth";

export default function HomeTitle({ user }) {
  const logOut = (e) => {
    e.preventDefault();

    auth.signOut();
  };

  const logIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <div className={styles.block}>
      <h1 className={styles.title}>
        Welcome, {user ? user.displayName : "guest"}!
      </h1>
      {user ? (
        <div className={styles.blockAuth}>
          <img className={styles.userAvatar} src={user.photoURL} alt="" />
          <p className={styles.authText} onClick={logOut}>
            Logout
          </p>
        </div>
      ) : (
        <div className={styles.blockAuth} onClick={logIn}>
          <GoogleIcon className={styles.googleIcon} />
          <p className={styles.authText}>Login</p>
        </div>
      )}
    </div>
  );
}
