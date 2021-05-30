import React, { useState } from "react";
import "./App.css";
import { auth, provider } from "./firebase";
import Login from "./Login/Login";

const App = () => {
  const [user, setUser] = useState([]);

  const login = () => {
    auth.signInWithPopup(provider).then((res) => setUser(res.user));
  };

  console.log(user);

  return (
    <div>
      {user.email ? (
        <>
          <h1>I AM LOGGED IN</h1>
          {user.displayName}
        </>
      ) : (
        <Login
          img="https://i.pinimg.com/originals/a6/06/25/a60625748a61e88e4ae17d53bc286910.png"
          loginFunction={login}
        />
      )}
    </div>
  );
};

export default App;
