import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotificationContainer from "./notification/notificationContainer";
import axios from "axios";
import Cookies from "js-cookie";
class NevBar extends React.Component {
  state = { class: "", notiClick: false };

  constructor() {
    super();
    axios
      .get("/isLogin", {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
      })
      .then(({ data }) => {
        this.setState({
          login: data.login,
          name: data.name,
          role: data.role,
          id: data.id,
        });
      })
      .catch((err) => {
        console.log(err)
        this.setState({ login: false });
      });
  }

  handleNotificationClick = () => {
    const temp = !this.state.notiClick;
    this.setState({ notiClick: temp });
  };
  handleLogout=()=>{
    Cookies.remove("access-token")
  }

  render() {
    const login = this.state.login;
    const role = this.state.role;
    return (
      <header id="main-header" class="">
        <div id="nav-bar" className={this.state.class}>
          <div class="logo-wrapper">
            <Link to="/" class="logo">
              Influences Hub
            </Link>
            <p class="user-type">{this.props.userType}</p>
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
                            <a className="dropdown-link" href="/" onClick={this.handleLogout}>
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
                            <a className="dropdown-link" href="/" onClick={this.handleLogout}>
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
                    onClick={this.handleNotificationClick}
                    title="Notifications"
                  >
                    <img src="/images/icons/bell.svg" alt="" className="bell" />
                    <sup className="number">
                      9<sup>+</sup>
                    </sup>
                  </div>
                ) : null}
                {this.state.notiClick ? <NotificationContainer /> : null}
                {login && role === "creator" ? (
                  this.props.profilePage ? (
                    <div className="link">
                      <Link to="/profile/edit">Edit Profile</Link>
                    </div>
                  ) : (
                    <div className="link">
                      <Link to={`/creator/${this.state.profileId}`}>
                        {this.state.name}
                      </Link>
                    </div>
                  )
                ) : null}

                {login && role === "brand" ? (
                  this.props.userType === "Post New Work" ? (
                    <div className="brand-name-1">{this.state.name}</div>
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
              if (this.state.class === "active") name = "";
              this.setState({ class: name });
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
    );
  }
}

export default NevBar;
