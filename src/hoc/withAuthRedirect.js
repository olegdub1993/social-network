import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsAuth = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
const withAuthRedirect = (Component) => {
  let ContainerComponent = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };
  let ConnectedContainerComponent = connect(mapStateToPropsAuth)(
    ContainerComponent
  );
  return ConnectedContainerComponent;
};
export default withAuthRedirect;
