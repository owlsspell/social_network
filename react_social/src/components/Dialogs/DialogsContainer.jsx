import React from "react";
import {
  updateNewMessageCreater,
  sendMessageTextCreater,
} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

let DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageTextCreater());
  };

  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageCreater(text));
  };

  return (
    <Dialogs
      sendMessageText={onSendMessageClick}
      updateNewMessage={onNewMessageChange}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
