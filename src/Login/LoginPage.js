import React, { useState } from "react";
import "./auth.scss";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../app/firebase";

export default function Login({ authType, setAuthType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div
      className={`auth__container ${
        authType !== 0 ? "hideLoginPage" : "viewpage"
      } `}
    >
      <form>
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

        <button type="submit" onClick={handleLogin}>
          Sign In
        </button>
      </form>

      <p>
        Not a member? {""}
        <span className="auth__register" onClick={() => setAuthType(1)}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
}
