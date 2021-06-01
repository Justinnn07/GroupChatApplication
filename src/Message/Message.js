import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Message.css";

const Message = () => {
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setMessageData(snapshot.docs.map((data) => data.data()));
      });
  }, []);

  console.log(messageData);

  return (
    <div className="message">
      {messageData?.map((message) => {
        return (
          <div className="flex">
            <img src={message.avatar} alt="" style={{ borderRadius: "50%" }} />
            <h4 style={{ color: "white" }}>{message.username}</h4>
            <p style={{ color: "white" }}>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Message;
