import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/user.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let newPageNumber = props.inputPage;
  let onSendPageChanged = (event) => {
    props.sendPageChanged(event.target.value);
  };

  return (
    <div>
      {/* <button onClick={this.getUsers}>Get Users</button> */}
      <div className={s.pageContainer}>
        <input
          className={s.input}
          type="number"
          min="1"
          max={pagesCount}
          onChange={onSendPageChanged}
          value={newPageNumber}
        />
        <button
          className={s.buttonInput}
          onClick={() => {
            if (newPageNumber <= pagesCount) {
              props.onPageChanged(newPageNumber);
            } else {
              return (newPageNumber = pagesCount);
            }
          }}
        >
          Выбрать страницу
        </button>
        {pages.map((p) => {
          let now = props.currentPage;
          if ((p < now + 3 && p > now - 3) || p === 1 || p === pages.length) {
            return (
              <div className={s.buttonPage} key={p}>
                <button
                  className={props.currentPage === p && s.selectedPage}
                  onClick={() => {
                    props.onPageChanged(p);
                  }}
                >
                  {p}
                </button>
              </div>
            );
          }
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.container}>
          <div>
            <div className={s.photoBox}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            {u.followed ? (
              <button
                className={s.follow}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={s.follow}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={s.infoBox}>
            <div className={s.description}>
              <div className={s.name}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
            </div>
            <div className={s.adress}>
              <div className={s.city}>{"u.location.city"},</div>
              <div className={s.country}>{"u.location.country"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
