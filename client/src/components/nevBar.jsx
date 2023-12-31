import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import NotificationContainer from "./notification/notificationContainer";
import Cookies from "js-cookie";
import { useState } from "react";
import { loginInfo, notifications } from "../globalState";
import { useAtom } from "jotai";
import JobCompleted from "./job-complete/jobCompleted";
const NevBar = (props) => {
  const [cls, setCls] = useState("");
  const [notiClick, setNotiClick] = useState(false);
  const [userInfo] = useAtom(loginInfo);
  const [newNotifications, setNewNotifications] = useState(0);
  const [notification] = useAtom(notifications);
  useEffect(() => {
    let count = 0;
    for (let i of notification) {
      if (!i.seen) {
        count++;
      }
    }
    setNewNotifications(count);
  }, [notification]);
  const handleNotificationClick = () => {
    setNotiClick(!notiClick);
  };
  const handleLogout = () => {
    Cookies.remove("access-token");
  };

  const login = userInfo.login;
  const role = userInfo.role;
  return (
    <header id="main-header" class="">
      <div id="nav-bar" className={cls}>
        <div class="logo-wrapper">
          <Link to="/" class="logo">
            Influences Hub
          </Link>
          <p class="user-type">{props.userType}</p>
        </div>
        <div class="nav-menu">
          <div class="overlay"></div>
          <div class="inner">
            <div class="links">
              {/* start */}
              <div class="dropdown creator">
                <div class="dropdown-title link">
                  Brands
                  <img
                    src="/images/creators/icons/arrow-black.svg"
                    alt=""
                    className="dropdown-arrow"
                  />
                  <div className="creator-dropdown-content">
                    <Link className="dropdown-link" to="/brand">
                      Home
                    </Link>
                    <Link className="dropdown-link" to="/brand/post">
                      Work Post
                    </Link>

                    {login ? (
                      role == "brand" ? (
                        <>
                          <a
                            className="dropdown-link"
                            href="/"
                            onClick={handleLogout}
                          >
                            Log Out
                          </a>
                        </>
                      ) : null
                    ) : (
                      <>
                        <Link className="dropdown-link" to="/brand/signup">
                          Sign Up
                        </Link>
                        <Link className="dropdown-link" to="/brand/login">
                          Log In
                        </Link>
                      </>
                    )}
                  </div>
                </div>
                <div class="dropdown-content"></div>
              </div>
              <div class="dropdown creator">
                <div class="dropdown-title link">
                  Creator
                  <img
                    src="/images/creators/icons/arrow-black.svg"
                    alt=""
                    className="dropdown-arrow"
                  />
                  <div className="creator-dropdown-content">
                    <Link className="dropdown-link" to="/creator">
                      Home
                    </Link>
                    <Link className="dropdown-link" to="/creator/find">
                      Creators
                    </Link>

                    {login ? (
                      role === "creator" ? (
                        <>
                          <a
                            className="dropdown-link"
                            href="/"
                            onClick={handleLogout}
                          >
                            Log Out
                          </a>
                        </>
                      ) : null
                    ) : (
                      <>
                        <Link className="dropdown-link" to="/creator/signup">
                          Sign Up
                        </Link>
                        <Link className="dropdown-link" to="/creator/login">
                          Log In
                        </Link>
                      </>
                    )}
                  </div>
                </div>
                <div class="dropdown-content"></div>
              </div>
              {/* notification bell */}
              {login ? (
                <div
                  className="notification"
                  onClick={handleNotificationClick}
                  title="Notifications"
                >
                  <img src="/images/icons/bell.svg" alt="" className="bell" />
                  {newNotifications > 0 && (
                    <sup className="number">
                      {newNotifications > 9 ? 9 : newNotifications}
                      <sup>{newNotifications > 9 ? "+" : null}</sup>
                    </sup>
                  )}
                </div>
              ) : null}
              {/* {login ? (
                <div
                  className="notification"
                  onClick={()=>window.location="/message"}
                  title="Notifications"
                >
                  <img src="/images/icons/message.svg" alt="" className="bell" />
                  {newNotifications > 0 && (
                    <sup className="number">
                      {newNotifications > 9 ? 9 : newNotifications}
                      <sup>{newNotifications > 9 ? "+" : null}</sup>
                    </sup>
                  )}
                </div>
              ) : null}

               */}

              {notiClick ? <NotificationContainer /> : null}
              {login && role === "creator" ? (
                props.profilePage ? (
                  <div className="link">
                    <Link to={`/creator/profile/edit/${userInfo.id}`}>
                      Edit Profile
                    </Link>
                  </div>
                ) : (
                  <div className="link">
                    <Link to={`/creator/${userInfo.id}`}>{userInfo.name}</Link>
                  </div>
                )
              ) : null}
              {/* post new job and job complete button */}
              {login &&
              role === "brand" &&
              props.userType === "Jobs" &&
              userInfo.id === props.brandId &&
              !props.jobComplete ? (
                <JobCompleted />
              ) : login && role === "brand" ? (
                props.userType === "Post New Work" ? (
                  <div className="brand-name-1">{userInfo.name}</div>
                ) : (
                  <Link className="navBar-btn login" to="/brand/new/post">
                    Post New Work
                  </Link>
                )
              ) : null}

              {!login ? (
                <>
                  {""}
                  <Link className="navBar-btn login" to="/creator/login">
                    Log In
                  </Link>
                  {""}
                  <Link className="navBar-btn signup" to="/creator/signup">
                    Sign Up
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div
          class="hamburger"
          onClick={() => {
            let name = "active";
            if (cls === "active") name = "";
            setCls(name);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default NevBar;
