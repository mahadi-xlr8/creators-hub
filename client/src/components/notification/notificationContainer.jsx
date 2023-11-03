import NotificationCard from "./notificationCard";
import { loginInfo } from "../../globalState";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import {socket} from "../../socket"



const NotificationContainer = (props) => {
  const [userInfo] = useAtom(loginInfo);

  const data = [
    {
      img: "/images/creators/mehazabien/img1.jpg",
      link: "/",
      name: "Mehazabien",
      action: "has commented on your work post.",
      unseen: false,
      date: "26 sep 2023",
      profileLink: "/creators/Mehazabien%20Chowdhury",
    },
    {
      img: "/images/creators/mehazabien/img1.jpg",
      link: "/",
      name: "Mehazabien",
      action: "has intarest on your work post.",
      unseen: true,
      date: "26 sep 2023",
      profileLink: "/creators/Mehazabien%20Chowdhury",
    },
  ];
  return (
    <div className="notification-container">
      {data.map((e) => {
        return (
          <NotificationCard
            name={e.name}
            link={e.link}
            img={e.img}
            action={e.action}
            unseen={e.unseen}
            profileLink={e.profileLink}
          />
        );
      })}
    </div>
  );
};

export default NotificationContainer;
