import React, { useState } from "react";
import "./auth.scss";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../app/firebase";

export default function Registration({ authType, setAuthType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("A full name is required to register.");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div
      className={`auth__container ${
        authType !== 1 ? "hideRegistrationPage" : "viewpage"
      } `}
    >
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
          autoComplete="new-password"
        />

        <input
          placeholder="Profile picture URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          autoComplete="new-password"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={handleRegistration}>
          Sign Up
        </button>
      </form>

      <p>
        have an account?
        <span
          className="auth__login"
          onClick={() => {
            setAuthType(0);
          }}
        >
          {" "}
          Log in
        </span>
      </p>
    </div>
  );
}
