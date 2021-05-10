import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUsers } from "../../redux/profile-reduser";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsers(userId);
    // ProfileAPI.getUsers(userId).then((data) => {
    //   this.props.setUserProfile(data);
    // });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let WithUrlDataContainer = withRouter(ProfileContainer);

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });

export default connect(mapStateToProps, { getUsers })(WithUrlDataContainer);
