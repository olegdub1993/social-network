import React from "react";
import styles from "./Status.module.css";
class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }
  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    let text = e.target.value;
    this.setState({ status: text });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    return (
      <div className={styles.status}>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode.bind(this)}>
              {this.props.status || "no status"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              className={styles.status__input}
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default Status;
