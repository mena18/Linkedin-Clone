import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_SI3zuaTgNwWbansWLQBorI7Nv545J5U",
  authDomain: "linkedin-clone-7786b.firebaseapp.com",
  projectId: "linkedin-clone-7786b",
  storageBucket: "linkedin-clone-7786b.appspot.com",
  messagingSenderId: "442454903491",
  appId: "1:442454903491:web:db49b13c7d107298a7b076",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
