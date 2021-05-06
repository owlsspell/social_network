import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Preloader from "../../common/Preloader/Preloader";
import {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  setTotalUsersCount,
  sendPageChanged,
  updatePageChanged,
  toggleIsFetching,
} from "../../redux/users-reduser";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
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
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUserCount: state.usersPage.totalUserCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    setTotalUsersCount: state.usersPage.setTotalUsersCount,
    inputPage: state.usersPage.inputPage,
    isFetching: state.usersPage.isFetching,
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  sendPageChanged,
  updatePageChanged,
  toggleIsFetching,
})(UsersContainer);
