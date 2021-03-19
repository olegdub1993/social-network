import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import { requestFriends } from "../../../Redux/sidebar-reducer";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.requestFriends();
  }
  render() {
    return <Friends {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  };
};

export default connect(mapStateToProps, { requestFriends })(FriendsContainer);
