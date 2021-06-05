import React from "react";
import "./Login.css";

const Login = ({ login }) => {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
        alt=""
      />
      <button onClick={login}>LOGIN</button>
    </div>
  );
};

export default Login;
