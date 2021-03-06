import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageTextCreater } from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

// let DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageTextCreater());
//         };

//         let onNewMessageChange = (text) => {
//           store.dispatch(updateNewMessageCreater(text));
//         };
//         return (
//           <Dialogs
//             sendMessageText={onSendMessageClick}
//             updateNewMessage={onNewMessageChange}
//             dialogsPage={store.getState().dialogsPage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageText: (newMessageText) => {
      dispatch(sendMessageTextCreater(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
