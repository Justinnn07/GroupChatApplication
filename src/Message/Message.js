import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Message.css";

const Message = () => {
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    db.collection("messages").onSnapshot((snapshot) =>
      snapshot.docs.map((data) => setMessageData(data.data()))
    );
  }, []);

  console.log(messageData);

  return (
    <div className="message">
      <img src={messageData.avatar} alt="" style={{ borderRadius: "50%" }} />
      <h4>{messageData.username}</h4>
      <p>{messageData.message}</p>
    </div>
  );
};

export default Message;
