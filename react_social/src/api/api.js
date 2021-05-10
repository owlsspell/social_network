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
  getUsers(userId = 2) {
    return instanse.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const HeaderAPI = {
  auth() {
    return instanse.get(`auth/me`).then((response) => response.data);
  },
};
