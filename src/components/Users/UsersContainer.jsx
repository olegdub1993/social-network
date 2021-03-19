import React from "react";
import Users from "./Users ";
import { connect } from "react-redux";
import { getPageSize, getUsers } from "../../Redux/users-selectors";
import { follow, unfollow, requestUsers } from "../../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          isFetching={this.props.isFetching}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (id) => {
//       dispatch(follow(id));
//     },
//     unfollow: (id) => {
//       dispatch(unfollow(id));
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPage(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCount(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetching(isFetching));
//     },
//     toggleIsFollowingProgress: (a, b) => {
//       dispatch(toggleIsFollowingProgress(a, b));
//     },
//     getUsersThunkCreator: () => {
//       dispatch(getUsersThunkCreator());
//     },
//   };
// };
// {
//   follow,
//   unfollow,
//   setUsers,
//   setCurrentPage,
//   setTotalUsersCount,
//   toggleIsFetching,
//   toggleIsFollowingProgress,
//   getUsersThunkCreator,
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  requestUsers,
})(UsersContainer);
