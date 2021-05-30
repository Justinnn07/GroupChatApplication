import React from "react";
import "./Login.css";

const Login = ({ img, loginFunction }) => {
  return (
    <div className="login">
      <img src={img} alt="" />
      <button onClick={loginFunction}>LOGIN</button>
    </div>
  );
};

export default Login;
