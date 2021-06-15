import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, Form } from "react-final-form";

let Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogElem = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let messageElem = state.messages.map((message) => (
    <Message message={message.message} img={message.img} />
  ));

  let addNewMessage = (values) => {
    props.sendMessageText(values.newMessageText);
  };

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElem}</div>
      <div className={s.messages}>
        {messageElem}
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field
            component="textarea"
            name="newMessageText"
            className={s.textarea}
            cols="100"
            rows="5"
            placeholder="Write..."
          />
          <button>Отправить сообщение</button>
        </form>
      )}
    </Form>
  );
};

export default Dialogs;
