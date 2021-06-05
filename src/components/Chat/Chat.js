import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
// import {AttachFile,MoreVert,SearchOutlined} from 'material-ui/icon'
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { auth, db } from "../../Firebase/firebase";
import firebase from "firebase";

const Chat = ({ username }) => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));

    // db datas ..
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setData(snapshot.docs.map((data) => data.data()))
      );
  }, []);

  const sendMessge = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const activeMember = auth.currentUser.displayName;

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen......</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {/* <p className={`chat_message ${true && "chat_receiver"}`}> */}
        {data.map(({ username, message }) => (
          <>
            <p
              className={
                activeMember === username
                  ? "chat_message chat_receiver"
                  : "chat_message "
              }
            >
              <div style={{ marginTop: -10 }}>
                <span className="chat_name" style={{ color: "white" }}>
                  {username}
                </span>
                {message}
                <span className="chat_timestamp">7:38pm</span>
              </div>
            </p>
          </>
        ))}
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type Your Message here"
          />
          <button onClick={sendMessge} type="submit">
            Send
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
