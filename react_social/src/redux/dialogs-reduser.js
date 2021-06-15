const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Dimych",
      img: "https://semantica.in/wp-content/uploads/2018/08/av-427845.png",
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
      img: "https://semantica.in/wp-content/uploads/2018/08/av-427845.png",
    },
    {
      id: 1,
      message: "Как дела?",
      img: "https://semantica.in/wp-content/uploads/2018/08/av-427845.png",
    },
  ],
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 1,
        message: action.newMessageText,
        img: "https://semantica.in/wp-content/uploads/2018/08/av-427845.png",
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        // newMessageText: "",
      };

    default:
      return state;
  }
};

export const sendMessageTextCreater = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogsReduser;
