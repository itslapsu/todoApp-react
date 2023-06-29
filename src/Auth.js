// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAajw-coDBGOwE0gQEy7Lpcsp_2pC6MIts",
  authDomain: "auth.slap.pp.ua",
  projectId: "testproject-5dabc",
  storageBucket: "testproject-5dabc.appspot.com",
  messagingSenderId: "735920169357",
  appId: "1:735920169357:web:a2be4838c6cb6c2db95dc4",
  measurementId: "G-040M8WR26B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// // Получение ссылки на коллекцию
export const myCollectionRef = collection(firestore, "todos");
