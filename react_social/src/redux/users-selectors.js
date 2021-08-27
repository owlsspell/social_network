import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getUsersSuperSelector = createSelector(
  getUsersSelector,
  (users) => {
    return users.filter((user) => true);
  }
);
export const getTotalUserCount = (state) => {
  return state.usersPage.totalUserCount;
};
