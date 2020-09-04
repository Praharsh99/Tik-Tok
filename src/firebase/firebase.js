import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLdMiDBoUJKE0QJOrG49-l-fQ1K5Kd-D8",
  authDomain: "tik-tok-5bcfe.firebaseapp.com",
  databaseURL: "https://tik-tok-5bcfe.firebaseio.com",
  projectId: "tik-tok-5bcfe",
  storageBucket: "tik-tok-5bcfe.appspot.com",
  messagingSenderId: "285772406501",
  appId: "1:285772406501:web:ad6db3a99a646363223e0c",
  measurementId: "G-Q9XZN1K758",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
