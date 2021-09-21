import React, { useState } from "react";
import "./auth.scss";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";

export default function Login() {
  const [authType, setAuthType] = useState(0);

  return (
    <div className="auth">
      <img
        src={process.env.PUBLIC_URL + "/LinkedIn-Logo.wine.svg"}
        alt="linkedin logo"
      />
      <LoginPage authType={authType} setAuthType={setAuthType} />

      <RegistrationPage authType={authType} setAuthType={setAuthType} />
    </div>
  );
}
