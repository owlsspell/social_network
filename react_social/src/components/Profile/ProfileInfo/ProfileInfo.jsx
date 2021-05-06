import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.bgImg}>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div className={s.descriptionBlock}>
        <img className={s.avatar} src={props.profile.photos.large} />
        <h3>{props.profile.fullName}</h3>
        <span>{props.profile.aboutMe}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
