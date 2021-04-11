const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 11 },
        { id: 2, message: "It's my first post", likesCount: 12 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },

    sitebar: {
      friends: [
        {
          id: 1,
          name: "Dimych",
          img:
            "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
        },
        {
          id: 2,
          name: "Oleg",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4ywQJCspEpxM00mxm0YETNJ8tr6RbUJCaQ&usqp=CAU",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("v state");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 1,
        message: this._state.dialogsPage.newMessageText,
        img:
          "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },

  // addMessage() {
  //   let newMessage = {
  //     id: 1,
  //     message: this._state.dialogsPage.newMessageText,
  //     img:
  //       "https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
  //   };
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewMessageText(newMessage) {
  //   this._state.dialogsPage.newMessageText = newMessage;
  //   this._callSubscriber(this._state);
  // },
};

export const addPostActionCreater = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreater = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageTextCreater = () => ({ type: SEND_MESSAGE });

export const updateNewMessageCreater = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessage: text,
});

export default store;
document.store = store;
