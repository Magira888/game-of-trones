import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgL-w1E8ToHnPxuIsjR_44ttQcv-OkhGc",
  authDomain: "gotsecond-1d71b.firebaseapp.com",
  projectId: "gotsecond-1d71b",
  storageBucket: "gotsecond-1d71b.appspot.com",
  messagingSenderId: "571376278747",
  appId: "1:571376278747:web:34ff02634918c6c40740fe",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
