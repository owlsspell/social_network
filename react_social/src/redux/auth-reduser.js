import { FORM_ERROR } from "final-form";
import { authAPI, securityAPI } from "../api/api";
// import { stopSubmit } from "final-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_USER_DATA: 
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getCaptchaUrlSucces = (captchaUrl) => 
  ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload:{captchaUrl}
})

export const getAuthUserData = () => (dispatch) => {
  return authAPI.auth().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};
export const login = (email, password, rememberMe, captcha) => (dispatch) => {
  // return dispatch({ [FORM_ERROR]: "dsf" });

  authAPI.login(email, password, rememberMe,captcha).then((response) => {
    console.log(response);
    if (response.data.resultCode === 0) {
      // debugger;
      // let { id, email, login } = response.data.data;
      dispatch(getAuthUserData());
    }
    else if (response.data.resultCode ===10){
      dispatch(getCaptchaUrl())
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
export const getCaptchaUrl =  () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSucces(captchaUrl))
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
