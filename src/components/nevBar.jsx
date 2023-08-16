import React, { Component } from "react";
import { Link } from "react-router-dom";

class NevBar extends React.Component {
  state = { class: "" };
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

                {login && role === "creator" ? null : (
                  <div class="dropdown creator">
                    <div class="dropdown-title link">
                      Brands
                      <img
                        src="/images/creators/icons/arrow-black.svg"
                        alt=""
                      />
                      <div className="creator-dropdown-content">
                        <Link className="dropdown-link" to="/brands">
                          Home
                        </Link>

                        {login ? (
                          role == "brand" ? (
                            <Link className="dropdown-link" to="/">
                              Log Out
                            </Link>
                          ) : null
                        ) : (
                          <>
                            <Link
                              className="dropdown-link"
                              to="/brands/signup"
                            >
                              Sign Up
                            </Link>
                            <Link
                              className="dropdown-link"
                              to="/brands/login"
                            >
                              Log In
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                    <div class="dropdown-content"></div>
                  </div>
                )}

                {login && role === "brand" ? null : (
                  <div class="dropdown creator">
                    <div class="dropdown-title link">
                      Creators
                      <img
                        src="/images/creators/icons/arrow-black.svg"
                        alt=""
                      />
                      <div className="creator-dropdown-content">
                        <Link className="dropdown-link" to="/creators">
                          Home
                        </Link>

                        {login ? (
                          role === "creator" ? (
                            <Link className="dropdown-link" to="/">
                              Log Out
                            </Link>
                          ) : null
                        ) : (
                          <>
                            <Link
                              className="dropdown-link"
                              to="/creators/signup"
                            >
                              Sign Up
                            </Link>
                            <Link
                              className="dropdown-link"
                              to="/creators/login"
                            >
                              Log In
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                    <div class="dropdown-content"></div>
                  </div>
                )}
                {login && role === "brand" ? (
                  <Link to="/creators" class="link">
                    Find Creators
                  </Link>
                ) : null}

                <a href="blog" class="link">
                  Blog
                </a>
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
