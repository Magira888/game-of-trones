import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0fmKbjSMT4W1KSqPYeB83uJs1hbzYzLw",
  authDomain: "fan-page-got.firebaseapp.com",
  projectId: "fan-page-got",
  storageBucket: "fan-page-got.appspot.com",
  messagingSenderId: "1029058223825",
  appId: "1:1029058223825:web:3d1ec7dffc12f8fca5aff0",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
