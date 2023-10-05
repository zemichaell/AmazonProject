// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
