import { UserAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const INPUT_PAGE = "INPUT_PAGE";
const UPDATE_PAGE = "UPDATE_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_IS_FOLLOWIN_PROGRESS = "TOGGLE_IS_FOLLOWIN_PROGRESS";

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
  totalUserCount: 0,
  pageSize: 5,
  currentPage: 1,
  inputPage: 1,
  isFetching: true,
  followingInProgres: [],
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
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
        inputPage: action.currentPage,
      };
    }
    case TOTAL_USERS_COUNT: {
      return { ...state, totalUserCount: action.totalCount };
    }
    case INPUT_PAGE: {
      return { ...state, inputPage: action.inputPage };
    }
    case UPDATE_PAGE: {
      return { ...state, currentPage: action.inputPage };
    }
    case TOGGLE_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWIN_PROGRESS: {
      return {
        ...state,
        followingInProgres: action.isFetching
          ? [...state.followingInProgres, action.userId]
          : state.followingInProgres.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
  inputPage: currentPage,
});
export const setTotalUsersCount = (totalCount) => ({
  type: TOTAL_USERS_COUNT,
  totalCount,
});
export const sendPageChanged = (inputPage) => ({
  type: INPUT_PAGE,
  inputPage,
});
export const updatePageChanged = (inputPage) => ({
  type: UPDATE_PAGE,
  currentPage: inputPage,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});
export const toggleFollowingProgres = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWIN_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setCurrentPage(currentPage));
  dispatch(toggleIsFetching(true));

  UserAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) => {
  dispatch(toggleFollowingProgres(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgres(false, userId));
 
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId,UserAPI.addUsers.bind(UserAPI),followSuccess)
};

export const unfollow = (userId) => async(dispatch) => {
  followUnfollowFlow(dispatch, userId,UserAPI.deleteUsers.bind(UserAPI),unfollowSuccess)
};

export default usersReduser;
