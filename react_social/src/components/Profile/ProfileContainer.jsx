import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUsers, getStatus, updateStatus, savePhoto ,saveProfile} from "../../redux/profile-reduser";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

  refreshProfile(){
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autthorizedUserId;
    }
    this.props.getUsers(userId);
    setTimeout(() => {
      this.props.getStatus(userId);
    }, 1000);

    // ProfileAPI.getUsers(userId).then((data) => {
    //   this.props.setUserProfile(data);
    // });
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.userId!=prevProps.match.params.userId)
    this.refreshProfile()
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autthorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUsers, getStatus, updateStatus ,savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
