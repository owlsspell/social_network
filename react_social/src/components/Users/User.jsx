import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/user.png";
import { NavLink } from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";

let User = ({user, followingInProgres, follow, unfollow}) => {
  return (      
        <div key={user.id} className={s.container}>
          <div>
            <div className={s.photoBox}>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            {user.followed ? (
              <button
                disabled={followingInProgres.some((id) => id === user.id)}
                className={s.follow}
                onClick={() => {
                  unfollow(user.id);
                  // props.toggleFollowingProgres(true, u.id);
                  // UserAPI.deleteUsers(u.id).then((data) => {
                  //   if (data.resultCode === 0) {
                  //     props.unfollowSuccess(u.id);
                  //   }
                  //   props.toggleFollowingProgres(false, u.id);
                  // });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgres.some((id) => id === user.id)}
                className={s.follow}
                onClick={() => {
                  follow(user.id);
                  // props.toggleFollowingProgres(true, u.id);
                  // UserAPI.addUsers(u.id).then((data) => {
                  //   if (data.resultCode === 0) {
                  //     props.followSuccess(u.id);
                  //   }
                  //   props.toggleFollowingProgres(false, u.id);
                  // });
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={s.infoBox}>
            <div className={s.description}>
              <div className={s.name}>{user.name}</div>
              <div className={s.status}>{user.status}</div>
            </div>
            <div className={s.adress}>
              <div className={s.city}>{"u.location.city"},</div>
              <div className={s.country}>{"u.location.country"}</div>
            </div>
          </div>
        </div>
    
  );
};

export default User;
