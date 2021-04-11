import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://vesti.ua/wp-content/uploads/2020/05/samaya-krasivaya-devushka-v-mire-528x352.jpg" />
      <div className={s.post}>
        <div className={s.message}>{props.message}</div>
        <div>
          <span>like</span> {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
