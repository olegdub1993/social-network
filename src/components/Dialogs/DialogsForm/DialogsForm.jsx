import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import styles from "./DialogsForm.module.css";
import { FormControl } from "../../common/FormsContols/FormsControls";
import React from "react";
import { Field, reduxForm } from "redux-form";

const maxLength20 = maxLengthCreator(20);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.dialogsForm__field}>
        <Field
          placeholder="type message"
          name="newMessageBody"
          component={FormControl}
          typeField="textarea"
          validate={[required, maxLength20]}
        />
      </div>
      <button>Send</button>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
