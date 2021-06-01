import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [userData] = useState({
    username: "himanshu",
    password: "srijan",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("false");

  console.info(loggedIn);

  const login = () => {
    if (username === userData.username && password === userData.password) {
      localStorage.setItem("user", "true");
    }
  };

  useEffect(() => {
    const local = localStorage.getItem("user");
    setLoggedIn(local);
  }, []);

  const signout = () => {
    localStorage.setItem("user", "false");
  };

  return (
    <div className="app">
      {loggedIn === "true" ? (
        <>
          <h1>I AM LOGGED IN!</h1>
          <button onClick={signout}>SIGN OUT</button>
        </>
      ) : (
        <>
          <label>Login</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;
