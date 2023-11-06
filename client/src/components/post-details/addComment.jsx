import { useState } from "react";

const AddComment = (props) => {
  const [text, setText] = useState("");
  return (
    <div className="sent-comment">
      <input
        type="text"
        name=""
        placeholder="Comment here..."
        className="comment-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="button"
        value="Send"
        className="sent-button"
        onClick={() => {
          props.onSend(text);
          setText("");
        }}
      />
    </div>
  );
};

export default AddComment;
