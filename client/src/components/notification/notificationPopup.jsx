const NotificationPopup = (props) => {
  return (
    <div class="notification-popup-container">
      <div class="left">
        <div>
          <img src={props.img} alt="" />
        </div>
        <div class="text">
          <p class="name">{props.name}</p>
          <p class="message">{props.message}</p>
        </div>
      </div>
      <div class="right">
        <button onClick={props.terminate}>Close</button>
      </div>
    </div>
  );
};

export default NotificationPopup;
