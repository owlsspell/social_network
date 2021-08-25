export const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getTotalUserCount = (state) => {
  return state.usersPage.totalUserCount;
};
