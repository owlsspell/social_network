import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "../../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  sendPageChanged,
  updatePageChanged,
  toggleFollowingProgres,
  getUsers,
} from "../../redux/users-reduser";
import {
  getTotalUserCount,
  getUsersSelector,
  getUsersSuperSelector,
} from "../../redux/users-selectors";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // if (this.props.users.length === 0) {
    //   UserAPI.getUsers(this.props.setCurrentPage, this.props.pageSize).then(
    //     (data) => {
    //       this.props.toggleIsFetching(false);
    //       this.props.setUsers(data.items);
    //       this.props.setTotalUsersCount(data.totalCount);
    //     }
    //   );
    // }
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // this.props.setCurrentPage(pageNumber);
    // UserAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <div>
            <Preloader />
          </div>
        ) : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          inputPage={this.props.inputPage}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          sendPageChanged={this.props.sendPageChanged}
          followingInProgres={this.props.followingInProgres}
        />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     totalUserCount: state.usersPage.totalUserCount,
//     pageSize: state.usersPage.pageSize,
//     currentPage: state.usersPage.currentPage,
//     setTotalUsersCount: state.usersPage.setTotalUsersCount,
//     inputPage: state.usersPage.inputPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgres: state.usersPage.followingInProgres,
//   };
// };

const mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelector(state),
    totalUserCount: getTotalUserCount(state),
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    setTotalUsersCount: state.usersPage.setTotalUsersCount,
    inputPage: state.usersPage.inputPage,
    isFetching: state.usersPage.isFetching,
    followingInProgres: state.usersPage.followingInProgres,
  };
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    sendPageChanged: (inputPage) => {
      dispatch(sendPageChangedAC(inputPage));
    },
    updatePageChanged: (inputPage) => {
      dispatch(updatePageChangedAC(inputPage));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};*/

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    sendPageChanged,
    updatePageChanged,
    toggleFollowingProgres,
    getUsers,
  })
)(UsersContainer);
