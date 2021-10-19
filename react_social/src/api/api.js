import * as axios from "axios";

const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "d96d41f2-da2e-4abd-b9f4-a23fff4448e6",
  },
});

export const UserAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  addUsers(id) {
    return instanse.post(`follow/${id}`, {}).then((response) => response.data);
  },
  deleteUsers(id) {
    return instanse.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const ProfileAPI = {
  getUsers(userId) {
    return instanse.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instanse
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instanse
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
  savePhoto(photoFile){
    const formData = new FormData();
    formData.append("image", photoFile);
    return instanse
    .put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => response.data);
  },
  saveProfile(profile){
    return instanse
    .put(`profile`, profile)
    .then((response) => response.data);
  }
};

export const authAPI = {
  auth() {
    return instanse.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false,captcha=null) {
    // debugger
    return instanse
      .post(`auth/login`, { email, password, rememberMe ,captcha })
      .then((response) => response);
  },
  logout() {
    return instanse.delete(`auth/login`).then((response) => response.data);
  },
};

export const securityAPI = {
  
  getCaptchaUrl() {
    return instanse.get(`security/get-captcha-url`).then((response) => response)
  },
  
};
