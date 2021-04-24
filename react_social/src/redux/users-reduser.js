const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://i.pinimg.com/originals/b3/e7/a9/b3e7a9f02e9b56614602ee7cdd8c97fe.jpg",
    //   followed: false,
    //   fullname: "Lena",
    //   status: "Its ok",
    //   location: { city: "Zaporizhzha", country: "Ukraine" },
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://i.pinimg.com/originals/e9/1b/5a/e91b5a168ce22badd46238ac62ff34da.jpg",
    //   followed: true,
    //   fullname: "Albert",
    //   status: "Its ok",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://thumbs.dfs.ivi.ru/storage32/contents/3/3/19e118319193e81c392157fcafc148.jpg",
    //   followed: false,
    //   fullname: "Sasha",
    //   status: "Its ok",
    //   location: { city: "Chelabinsk", country: "Russia" },
    // },
  ],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReduser;
