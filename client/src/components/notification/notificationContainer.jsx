import NotificationCard from "./notificationCard";
import { notifications } from "../../globalState";
import { useAtom } from "jotai";

const NotificationContainer = () => {
  const [notification] = useAtom(notifications);
  return (
    <div className="notification-container">
      {notification.length > 0 ? (
        notification.map((e) => {
          return (
            <NotificationCard
              name={e.senderName}
              link={e.clickLink}
              img={e.senderImg}
              action={e.message}
              seen={e.seen}
              profileLink={e.senderProfile}
              time={e.time}
              notificationId={e._id}
            />
          );
        })
      ) : (
        <p className="message">You don't have any notification!</p>
      )}
    </div>
  );
};

export default NotificationContainer;
