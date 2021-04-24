import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://i.pinimg.com/originals/b3/e7/a9/b3e7a9f02e9b56614602ee7cdd8c97fe.jpg",
        followed: false,
        fullname: "Lena",
        status: "Its ok",
        location: { city: "Zaporizhzha", country: "Ukraine" },
      },
      {
        id: 2,
        photoUrl:
          "https://i.pinimg.com/originals/e9/1b/5a/e91b5a168ce22badd46238ac62ff34da.jpg",
        followed: true,
        fullname: "Albert",
        status: "Its ok",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://thumbs.dfs.ivi.ru/storage32/contents/3/3/19e118319193e81c392157fcafc148.jpg",
        followed: false,
        fullname: "Sasha",
        status: "Its ok",
        location: { city: "Chelabinsk", country: "Russia" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={s.container}>
          <div>
            <div className={s.photoBox}>
              <img src={u.photoUrl} alt="" />
            </div>
            <button className={s.follow}>Follow</button>
          </div>
          <div className={s.infoBox}>
            <div className={s.description}>
              <div className={s.name}>{u.fullname}</div>
              <div className={s.status}>{u.status}</div>
            </div>
            <div className={s.adress}>
              <div className={s.city}>{u.location.city},</div>
              <div className={s.country}>{u.location.country}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
