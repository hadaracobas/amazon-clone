import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4lf4LCpbJ5uQLVFwaTaAmV9qa3jxC_5k",
  authDomain: "clone-f7e8e.firebaseapp.com",
  databaseURL: "https://clone-f7e8e.firebaseio.com",
  projectId: "clone-f7e8e",
  storageBucket: "clone-f7e8e.appspot.com",
  messagingSenderId: "137590799194",
  appId: "1:137590799194:web:9b2728d7c10a476f519163",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
