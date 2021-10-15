import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import appReduser from "./app-reduser";

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  sitebar: sidebarReduser,
  auth: authReduser,
  app: appReduser,
});

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store;

export default store;
