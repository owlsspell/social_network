import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  unfollowAC,
  setTotalUsersCountAC,
  sendPageChangedAC,
  updatePageChangedAC,
} from "../../redux/users-reduser";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    console.log("страница" + " " + pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <Users
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        pagesCount={this.props.pagesCount}
        inputPage={this.props.inputPage}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
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
  };
};

const mapDispatchToProps = (dispatch) => {
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
  };
};

export default UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
