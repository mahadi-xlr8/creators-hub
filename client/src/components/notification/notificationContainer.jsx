import NotificationCard from "./notificationCard";
import { notifications } from "../../globalState";
import { useAtom } from "jotai";



const NotificationContainer = (props) => {
  const [notification]=useAtom(notifications)
  return (
    <div className="notification-container">
      {notification.map((e) => {
        return (
          <NotificationCard
            name={e.senderName}
            link={e.clickLink}
            img={e.senderImg}
            action={e.message}
            seen={e.seen}
            profileLink={e.senderProfile}
            time={e.time}
          />
        );
      })}
    </div>
  );
};

export default NotificationContainer;
