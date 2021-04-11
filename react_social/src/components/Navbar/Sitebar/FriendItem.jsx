import React from "react";
import s from "./Sitebar.module.css";

let FriendItem = (props) => {
  return (
    <div className={s.friendBlock}>
      <img src={props.img} alt="" />
      {props.name}
    </div>
  );
};

export default FriendItem;
