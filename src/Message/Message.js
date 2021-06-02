import React, { useEffect, useState } from "react";
import "./Message.css";
import { db } from "../firebase";
import { Avatar } from "@material-ui/core";

const Message = (props) => {
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setMessageData(snapshot.docs.map((data) => data.data()));
      });
  }, []);

  return (
    <div>
      {messageData.map((message) => {
        return (
          <>
            <Avatar src={message.avatar} style={{ margin: 10 }} />
            <div
              className={
                message.username === props.username
                  ? "messages sender"
                  : "messages"
              }
            >
              <h6>{message.username}</h6>
              <p>{message.message}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Message;
