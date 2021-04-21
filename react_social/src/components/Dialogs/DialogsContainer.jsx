import React from "react";
import {
  updateNewMessageCreater,
  sendMessageTextCreater,
} from "../../redux/dialogs-reduser";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

let DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let onSendMessageClick = () => {
          store.dispatch(sendMessageTextCreater());
        };

        let onNewMessageChange = (text) => {
          store.dispatch(updateNewMessageCreater(text));
        };
        return (
          <Dialogs
            sendMessageText={onSendMessageClick}
            updateNewMessage={onNewMessageChange}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
