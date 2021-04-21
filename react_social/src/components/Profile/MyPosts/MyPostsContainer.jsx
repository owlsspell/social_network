import React from "react";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../../redux/profile-reduser";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreater());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreater(text));
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
