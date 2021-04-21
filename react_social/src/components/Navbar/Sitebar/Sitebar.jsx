import React from "react";
import StoreContext from "../../../StoreContext";
import FriendItem from "./FriendItem";
import s from "./Sitebar.module.css";

let Sitebar = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let friends = store.getState().sitebar.friends;
        let friendElem = friends.map((f) => (
          <FriendItem name={f.name} img={f.img} />
        ));
        return (
          <div className={s.sitebar}>
            <div className={s.title}>Friends</div>
            <div className={s.friends}>{friendElem}</div>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Sitebar;
