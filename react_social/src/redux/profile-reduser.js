import { FORM_ERROR } from "final-form";
import { ProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO = "SAVE_PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 11 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.postText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.post),
        
      };
    }
    case SAVE_PHOTO: {
      return {
        ...state,
        profile: {... state.profile, photos: action.photos}
        
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreater = (postText) => ({
  type: ADD_POST,
  postText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const deletePost = (post) => ({
  type: DELETE_POST,
  post,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO,
  photos,
});

export const getUsers = (userId) => (dispatch) => {
  ProfileAPI.getUsers(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export const savePhoto = (file) => async (dispatch) => {
   let response = await ProfileAPI.savePhoto(file)
  
    if (response.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  //достаем из другого редюсера id 
  const userId = getState().auth.id
  const response = await ProfileAPI.saveProfile(profile)
  // debugger
    if (response.resultCode === 0) {
      dispatch(getUsers(userId));
    } else {
      // debugger
        // return new Error(response.messages[0]);
        throw new Error(response.messages[0])
    }
};

export default profileReduser;
