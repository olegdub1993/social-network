import React from "react";
import styles from "./Music.module.css";
import logo from "./../../assets/img/logo.png";
import Song from "./Song/Song";
import Music from "./Music";
import { connect } from "react-redux";
import { getMusic } from "../../Redux/music-reducer";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class MusicContainer extends React.Component {
  componentDidMount() {
    this.props.getMusic();
  }
  render() {
    return <Music {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    songs: state.musicPage.songs,
  };
};

export default compose(
  connect(mapStateToProps, { getMusic }),
  withAuthRedirect
)(MusicContainer);
