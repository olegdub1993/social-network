import React from "react";
import Dialog from "./Dialog/Dialog";
import styles from "./Dialogs.module.css";
import DialogsForm from "./DialogsForm/DialogsForm";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((d) => (
    <Dialog name={d.name} key={d.id} id={d.id} avatar={d.avatar} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
    values.newMessageBody = null;
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div className={styles.dialogs__form}>
        <DialogsForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
export default Dialogs;
