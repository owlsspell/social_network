import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "./../../assets/user.png";

class Users extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {this.props.users.map((u) => (
          <div key={u.id} className={s.container}>
            <div>
              <div className={s.photoBox}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                />
              </div>
              {u.followed ? (
                <button
                  className={s.follow}
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={s.follow}
                  onClick={() => {
                    this.props.follow(u.id);
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
  }
}

// const Users = (props) => {
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then((response) => {
//           props.setUsers(response.data.items);
//         });
//     }
//   };

//   return (
//     <div>
//       <button onClick={getUsers}>Get Users</button>
//       {props.users.map((u) => (
//         <div key={u.id} className={s.container}>
//           <div>
//             <div className={s.photoBox}>
//               <img
//                 src={u.photos.small != null ? u.photos.small : userPhoto}
//                 alt=""
//               />
//             </div>
//             {u.followed ? (
//               <button
//                 className={s.follow}
//                 onClick={() => {
//                   props.unfollow(u.id);
//                 }}
//               >
//                 Unfollow
//               </button>
//             ) : (
//               <button
//                 className={s.follow}
//                 onClick={() => {
//                   props.follow(u.id);
//                 }}
//               >
//                 Follow
//               </button>
//             )}
//           </div>
//           <div className={s.infoBox}>
//             <div className={s.description}>
//               <div className={s.name}>{u.name}</div>
//               <div className={s.status}>{u.status}</div>
//             </div>
//             <div className={s.adress}>
//               <div className={s.city}>{"u.location.city"},</div>
//               <div className={s.country}>{"u.location.country"}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export default Users;
