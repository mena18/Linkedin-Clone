import React, { useEffect } from "react";
import "./App.scss";
// import firebase from "firebase";
import { login, logout, selectUser } from "./features/userSlice";
import AuthPage from "./Login/authPage";
import { auth } from "./app/firebase";
// components
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widget from "./widget/Widget";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      {!user ? (
        <AuthPage />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
