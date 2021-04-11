import React from "react";
import FriendItem from "./FriendItem";
import s from "./Sitebar.module.css";

let Sitebar = (props) => {
  let friendElem = props.friends.map((f) => (
    <FriendItem name={f.name} img={f.img} />
  ));
  return (
    <div className={s.sitebar}>
      <div className={s.title}>Friends</div>
      <div className={s.friends}>{friendElem}</div>
    </div>
  );
};

export default Sitebar;
