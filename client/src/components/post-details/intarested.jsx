import Star from "../stars";
const Intarested = (props) => {
  return (
    <div className="comment" style={{ margin: "5px 0" }}>
      <img
        src={props.profileImg}
        alt=""
        srcset=""
        onClick={() => (window.location = props.profileLink)}
        style={{ cursor: "pointer" }}
      />
      <div className="comment-info">
        <p className="name">{props.name}</p>
        <p className="text">{props.time}</p>
      </div>
    </div>
  );
};

export default Intarested;
