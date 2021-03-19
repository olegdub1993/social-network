import React, { useEffect, useState } from "react";
import styles from "./Status.module.css";
const Status = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  const activateEditMode = () => {
    setEditMode(true);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const deactivateEditMode = () => {
    setEditMode(false);
    debugger;
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className={styles.status}>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>{props.status || "no status"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={styles.status__input}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default Status;
