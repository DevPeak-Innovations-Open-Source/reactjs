import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-content">
        <h3>Login Page</h3>
        <input type="text" />
        <input type="password" />
        <button type="button" className="btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
