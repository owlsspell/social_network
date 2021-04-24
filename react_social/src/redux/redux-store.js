import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./users-reduser";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  sitebar: sidebarReduser,
});

let store = createStore(reducers);

export default store;
