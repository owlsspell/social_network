const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 1,
        message: state.newMessageText,
        img:
          "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};

export const sendMessageTextCreater = () => ({ type: SEND_MESSAGE });

export const updateNewMessageCreater = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessage: text,
});

export default dialogsReduser;
