import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageCreater,
  sendMessageTextCreater,
} from "../../redux/state";

let Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogElem = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let messageElem = state.messages.map((message) => (
    <Message message={message.message} img={message.img} />
  ));

  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageTextCreater());
  };

  let onNewMessageChange = (event) => {
    let text = event.target.value;
    props.store.dispatch(updateNewMessageCreater(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElem}</div>
      <div className={s.messages}>
        {messageElem}
        <textarea
          cols="100"
          rows="5"
          onChange={onNewMessageChange}
          value={newMessageText}
        />
        <button onClick={onSendMessageClick}>Отправить сообщение</button>
      </div>
    </div>
  );
};

export default Dialogs;
