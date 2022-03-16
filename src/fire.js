import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqWXCLHnIQBIhBUO5RvvXcBDf_FS0oGSo",
  authDomain: "rayban-8050f.firebaseapp.com",
  projectId: "rayban-8050f",
  storageBucket: "rayban-8050f.appspot.com",
  messagingSenderId: "756630930994",
  appId: "1:756630930994:web:688e9bc0736fbd51c7de2b"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
