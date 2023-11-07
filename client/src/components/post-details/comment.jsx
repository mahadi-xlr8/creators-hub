const Comment = (props) => {
  return (
    <div className="comment" title={props.time}>
      <img
        src={props.senderImg}
        alt=""
        srcset=""
        onClick={() => {
          if (!props.isBrand) window.location = props.senderProfile;
        }}
        style={!props.isBrand ? { cursor: "pointer" } : null}
      />
      <div className="comment-info">
        <p className="name">{props.senderName}</p>
        <p className="text">{props.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
