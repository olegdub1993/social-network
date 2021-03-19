import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { sendMessage } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Dialogs);
