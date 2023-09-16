import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotificationContainer from "./notification/notificationContainer";

class NevBar extends React.Component {
  state = { class: "", notiClick: false };

  handleNotificationClick = () => {
    const temp = !this.state.notiClick;
    this.setState({ notiClick: temp });
  };

  render() {
    const login = this.props.login || this.props.profile;
    const role = this.props.role;

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
                      <Link className="dropdown-link" to="/brands">
                        Home
                      </Link>
                      <Link className="dropdown-link" to="/brands/post">
                        Work Post
                      </Link>

                      {login ? (
                        role == "brand" ? (
                          <>
                            <Link className="dropdown-link" to="/">
                              Log Out
                            </Link>
                          </>
                        ) : null
                      ) : (
                        <>
                          <Link className="dropdown-link" to="/brands/signup">
                            Sign Up
                          </Link>
                          <Link className="dropdown-link" to="/brands/login">
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
                      <Link className="dropdown-link" to="/creators">
                        Home
                      </Link>
                      <Link className="dropdown-link" to="/creators/find">
                        Creators
                      </Link>

                      {login ? (
                        role === "creator" ? (
                          <>
                            <Link className="dropdown-link" to="/">
                              Log Out
                            </Link>
                          </>
                        ) : null
                      ) : (
                        <>
                          <Link className="dropdown-link" to="/creators/signup">
                            Sign Up
                          </Link>
                          <Link className="dropdown-link" to="/creators/login">
                            Log In
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                  <div class="dropdown-content"></div>
                </div>

                {/* TODO: complete notification */}
                {login ? (
                  <div
                    className="notification"
                    onClick={this.handleNotificationClick}
                    title="Notifications"
                  >
                    <img src="/images/icons/bell.svg" alt="" className="bell" />
                    <sup className="number">9<sup>+</sup></sup>
                  </div>
                ) : null}
                {this.state.notiClick ? <NotificationContainer /> : null}

                {login ? (
                  this.props.profile ? (
                    <div className="link">
                      <Link to="/profile/edit">Edit Profile</Link>
                    </div>
                  ) : (
                    <div className="link">
                      <Link to="/profile">{this.props.name}</Link>
                    </div>
                  )
                ) : (
                  <>
                    {""}
                    <Link className="navBar-btn login" to="/creators/login">
                      Log In
                    </Link>
                    {""}
                    <Link className="navBar-btn signup" to="/creators/signup">
                      Sign Up
                    </Link>
                  </>
                )}
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
