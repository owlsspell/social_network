import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.bgImg}>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div className={s.descriptionBlock}>
        <img
          className={s.avatar}
          src="https://vesti.ua/wp-content/uploads/2020/05/samaya-krasivaya-devushka-v-mire-528x352.jpg"
        />{" "}
        <span>Name</span>
        <span>description</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
