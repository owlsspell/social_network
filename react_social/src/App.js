import React, { Suspense } from "react";
import { BrowserRouter, HashRouter, Route, withRouter,Switch ,Redirect} from "react-router-dom";
import "./App.css";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "../src/redux/app-reduser";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  catchAllErrors =(reason, promise)=>{
    alert(reason.reason.message)
  }

  componentDidMount() {
    this.props.initializeApp();

    //catch all promise with errors
    window.addEventListener("unhandledrejection",this.catchAllErrors)
  }

  componentWillUnmount(){
    window.removeEventListener("unhandledrejection",this.catchAllErrors)

  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
                /> 
                
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login" render={() => <Login />} />
                <Redirect exact from="/" to="/profile" /> 
                <Route path="*" render={() => <div>404 Not Found</div>} /> 
             
            </Switch> </Suspense>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);


const SocialApp = (props) => {
  return     (<BrowserRouter basename={process.env.USERNAME}  >
  <Provider store={store}>
    <AppContainer />
  </Provider>
</BrowserRouter>)
}

export default SocialApp