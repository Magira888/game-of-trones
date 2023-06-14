// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgL-w1E8ToHnPxuIsjR_44ttQcv-OkhGc",
  authDomain: "gotsecond-1d71b.firebaseapp.com",
  projectId: "gotsecond-1d71b",
  storageBucket: "gotsecond-1d71b.appspot.com",
  messagingSenderId: "571376278747",
  appId: "1:571376278747:web:34ff02634918c6c40740fe",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
