import { useState } from "react";
import Comment from "./comment";
import AddComment from "./addComment";

const CommentBox = (props) => {
  const comments = ["a", "b"];
  const [comment, setComment] = useState("");

  return (
    <div className="comment-container">
        <div className="comment-box">
        <Comment value="b"/>
        <Comment value="a"/>

        </div>
      <div className="add-comment">
        <AddComment/>
      </div>
    </div>
  );
};

export default CommentBox;
