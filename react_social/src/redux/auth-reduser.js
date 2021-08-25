import { FORM_ERROR } from "final-form";
import { authAPI } from "../api/api";
// import { stopSubmit } from "final-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getAuthUserData = () => (dispatch) => {
  return authAPI.auth().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  // return dispatch({ [FORM_ERROR]: "dsf" });

  authAPI.login(email, password, rememberMe).then((response) => {
    console.log(response);
    if (response.data.resultCode === 0) {
      // debugger;
      // let { id, email, login } = response.data.data;
      dispatch(getAuthUserData());
    }
    // if (response.data.resultCode === 1) {
    // FORM_ERROR = [response.data.messages];
    // return { [FORM_ERROR]: "dsf" };
    // return response;

    // dispatch({ [FORM_ERROR]: "dsf" });
    // response.messages.map((message) => console.log(message));
    // }
  });
};
export const logout = (email, password, rememberMe) => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

// export const follow = (userId) => (dispatch) => {
//   dispatch(toggleFollowingProgres(true, userId));
//   UserAPI.addUsers(userId).then((data) => {
//     if (data.resultCode === 0) {
//       dispatch(followSuccess(userId));
//     }
//     dispatch(toggleFollowingProgres(false, userId));
//   });
// };

export default authReduser;
