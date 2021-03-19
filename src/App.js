import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicContainer from "./components/Music/MusicContainer";
import Settings from "./components/Settings/Settings";
import { connect } from "react-redux";
import { initialize } from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <main className="app-wrapper-content">
          <Route render={() => <Login />} path="/login" />
          <Route render={() => <News />} path="/news" />
          <Route render={() => <Settings />} path="/settings" />
          <Route render={() => <MusicContainer />} path="/music" />
          <Route render={() => <UsersContainer />} path="/users" />
          <Route render={() => <ProfileContainer />} path="/profile/:userId?" />
          <Route render={() => <DialogsContainer />} path="/dialogs" />
        </main>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return { initialized: state.app.initialized };
};
export default connect(mapStateToProps, { initialize })(App);
