import React from "react";
import "./App.scss";
// import firebase from "firebase";

import AuthPage from "./Login/authPage";

// components
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widget from "./widget/Widget";

function App() {
  const user = true;
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
