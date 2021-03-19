import React from "react";
import { connect } from "react-redux";
import { getAuthData, logout } from "../../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, { getAuthData, logout })(
  HeaderContainer
);
