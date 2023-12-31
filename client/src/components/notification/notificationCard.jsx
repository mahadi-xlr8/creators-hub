import axios from "axios";
const NotificationCard = (props) => {
  return (
    <div className="notification-card" title={props.time}>
      <img
        src={props.img}
        alt=""
        onClick={() => (window.location = props.profileLink)}
      />

      <div
        className="temp-text"
        onClick={() => {
          axios
            .post("/notification/seen", { id: props.notificationId })
            .then((res) => {});
          window.location = props.link;
        }}
      >
        <div className="text-part">
          <p className="message">
            <span className="name">{props.name}</span> {props.action}
          </p>
          <span className="time">{props.date}</span>
        </div>
        {!props.seen ? (
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
