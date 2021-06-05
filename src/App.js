import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Chat from "./components/Chat/Chat";
import { auth, provider } from "./Firebase/firebase";
import Login from "./components/Login/Login";

const App = () => {
  const [user, setUser] = useState([]);

  console.log(user);

  const login = () => {
    auth.signInWithPopup(provider).then((res) => setUser(res.user));
  };

  const username = user.displayName;

  return (
    <div className="app">
      {user.email ? (
        <div className="app_body">
          <Sidebar />
          <Chat username={username} />
        </div>
      ) : (
        <Login login={login} />
      )}
    </div>
  );
};

export default App;
