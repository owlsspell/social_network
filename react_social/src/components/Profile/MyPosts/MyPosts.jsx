import React from "react";
import { Field, Form } from "react-final-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElem = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.postText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsText onSubmit={onAddPost} />

      <div className={s.posts}>{postsElem}</div>
    </div>
  );
};

const MyPostsText = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field
            name="postText"
            component="textarea"
            className={s.textarea}
          ></Field>
          <div>
            <button>Add post</button>
          </div>
        </form>
      )}
    </Form>
  );
};

export default MyPosts;
