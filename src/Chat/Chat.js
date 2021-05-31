import React, { useState } from "react";
import { db } from "../firebase";

const Chat = () => {
  const [message, setMessage] = useState("");

  const onMessageInputChange = (e) => {
    setMessage(e.target.value);
  };

  const messageAddToDb = () => {
    db.collection("messages").add({
      message: message,
    });
    setMessage("");
  };

  return (
    <div className="chat">
      <input type="text" value={message} onChange={onMessageInputChange} />
      <button onClick={messageAddToDb}>SEND</button>
    </div>
  );
};

export default Chat;
