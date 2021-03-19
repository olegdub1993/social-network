import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
  requestUserProfile,
  requestUserStatus,
  updateStatus,
} from "../../Redux/profile-reducer";
import { getUserProfile, getUserStatus } from "../../Redux/profile-selectors";
import Profile from "./Profile";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.requestUserProfile(userId);
    this.props.requestUserStatus(userId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      if (!this.props.match.params.userId) {
        this.props.history.push("/login");
      }
      let userId = this.props.match.params.userId;
      this.props.requestUserProfile(userId);
      this.props.requestUserStatus(userId);
    }
  }
  render() {
    return <Profile {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: getUserProfile(state),
    statusText: getUserStatus(state),
    // profile: state.profilePage.profile,
    // statusText: state.profilePage.status,
    authUserId: state.auth.userId,
  };
};
export default compose(
  connect(mapStateToProps, {
    requestUserProfile,
    requestUserStatus,
    updateStatus,
  }),
  withRouter
)(ProfileContainer);
