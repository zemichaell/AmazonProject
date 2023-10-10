// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxcuzCDEWK4DbYo4kay6kFtiXumPfk8Oc",
  authDomain: "project-55e6d.firebaseapp.com",
  projectId: "project-55e6d",
  storageBucket: "project-55e6d.appspot.com",
  messagingSenderId: "908487167257",
  appId: "1:908487167257:web:db7bbf190653a777a60988",
  measurementId: "G-SFTJX0WV5Q",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

export { auth, db };
