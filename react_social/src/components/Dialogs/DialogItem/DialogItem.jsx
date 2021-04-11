import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

let DialogItem = (props) => {
  return (
    <div>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
        <img src={props.img} alt="" />
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default DialogItem;
