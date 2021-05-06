import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  sitebar: sidebarReduser,
  auth: authReduser,
});

let store = createStore(reducers);

window.store = store;

export default store;
