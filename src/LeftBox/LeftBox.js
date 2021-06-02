import React from "react";
import "./LeftBox.css";
import { Input, Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UserInfo from "../UserInfo/UserInfo";

function LeftBox(props) {
  return (
    <div className="leftBox">
      <div className="topHeaderRow">
        <Avatar
          alt="Remy Sharp"
          style={{ marginLeft: "10px" }}
          src={props.avatar}
        />
        <div className="leftboxicons">
          <DonutLargeIcon className="icon" />
          <AddIcon className="icon" />
          <MoreVertIcon className="icon" />
        </div>
      </div>
      <div className="middleHeaderRow">
        <div className="inputbarbox">
          <SearchIcon />
          <Input className="inputbar" />
        </div>
      </div>

      <div className="Userinfosbox">
        <UserInfo avatar={props.avatar} username={props.username} />
      </div>
    </div>
  );
}

export default LeftBox;
