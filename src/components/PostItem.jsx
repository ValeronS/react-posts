import React from "react";
import BaseButton from "./UI/button/BaseButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className={"post__content"}>
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={"post__btns"}>
        <BaseButton
          className={"post__btn"}
          onClick={() => props.remove(props.post)}
        >
          Удалить
        </BaseButton>
      </div>
    </div>
  );
};

export default PostItem;
