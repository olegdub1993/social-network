import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsAuth = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const withProfileRedirect = (Component) => {
  const ContainerComponent = (props) => {
    if (props.isAuth) return <Redirect to="/profile" />;
    return <Component {...props} />;
  };
  return connect(mapStateToPropsAuth)(ContainerComponent);
};
export default withProfileRedirect;
