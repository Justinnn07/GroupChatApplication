import React, { useState } from "react";
import "./App.css";
import Chat from "./Chat/Chat";
import { auth, provider } from "./firebase";
import Login from "./Login/Login";

const App = () => {
  const [user, setUser] = useState([]);

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => localStorage.setItem("user", setUser(res.user)));
  };

  return (
    <div>
      {user.email ? (
        <>
          <Chat />
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
