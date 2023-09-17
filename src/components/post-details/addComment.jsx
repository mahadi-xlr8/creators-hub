import { useState } from "react";

const AddComment = (props) => {
  const [text, setText] = useState("");
  function handleClick(){
    console.log(text)
    setText("")
  }
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
      <input type="button" value="Send" className="sent-button" onClick={handleClick}/>
    </div>
  );
};

export default AddComment;
