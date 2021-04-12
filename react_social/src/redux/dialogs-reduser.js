const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Dimych",
      img:
        "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
    },
    {
      id: 2,
      name: "Lena",
      img:
        "https://www.moya-planeta.ru/upload/images/xl/19/a7/19a713c5edb6c69c5a0c31b875d732b3.jpg",
    },
    {
      id: 3,
      name: "Oleg",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4ywQJCspEpxM00mxm0YETNJ8tr6RbUJCaQ&usqp=CAU",
    },
  ],

  messages: [
    {
      id: 1,
      message: "Hi",
      img:
        "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
    },
    {
      id: 1,
      message: "Как дела?",
      img:
        "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
    },
  ],
  newMessageText: "",
};

const dialogsReduser = (state = initialState, action) => {
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
