import { Link } from "react-router-dom";

const NotificationCard = (props) => {
  return (
    <div className="notification-card">
      <img
        src={props.img}
        alt=""
        onClick={() => (window.location = props.profileLink)}
      />

      <div className="temp-text" onClick={() => (window.location = props.link)}>
        <div className="text-part">
          <p className="message">
            <span className="name">{props.name}</span> {props.action}
          </p>
          <span className="time">{props.date}</span>
        </div>
        {props.unseen ? (
          <img
            src="/images/icons/dot.svg"
            alt=""
            srcset=""
            className="unseen"
          />
        ) : null}
      </div>
    </div>
  );
};

export default NotificationCard;
