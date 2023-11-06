const Comment = (props) => {
  return (
    <div className="comment" title={props.time}>
      <img
        src={props.senderImg}
        alt=""
        srcset=""
        onClick={() => (window.location = props.senderProfile)}
        style={{ cursor: "pointer" }}
      />
      <div className="comment-info">
        <p className="name">{props.senderName}</p>
        <p className="text">{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
