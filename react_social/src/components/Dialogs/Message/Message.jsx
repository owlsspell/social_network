import React from "react";
import s from "./../Dialogs.module.css";

let Message = (props) => {
  return (
    <div className={s.message}>
      <img src={props.img} alt="" />
      {props.message}
    </div>
  );
};

export default Message;
