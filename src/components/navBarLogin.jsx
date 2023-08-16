import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBarLogin.css";
class NavBarLogin extends React.Component {
  state = { class: "Header__Wrapper-sc-1dgub2e-0 eQfyfb" };
  render() {
    return (
      <header className={this.state.class}>
        <div className="inner">
          <div class="logo-wrapper">
            <Link to="/" class="logo">
              Influences Hub
            </Link>
            <p class="user-type">{this.props.userType}</p>
          </div>
          <div class="nav">
            <a
              class="Header__Link-sc-1dgub2e-1 kVUjzS"
              href="/collaboration-hub"
            >
              Collaboration Hub
            </a>
            <a
              class="link"
              href="https://creator.co/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a
              class="link"
              href="https://creator.co/creator-contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <div class="ctas">
              <a class="Header__Link-sc-1dgub2e-1 kVUjzS cta" href="/login">
                <button type="button" class="ant-btn ant-btn-primary">
                  <span>Log In</span>
                </button>
              </a>
              <a class="Header__Link-sc-1dgub2e-1 kVUjzS cta" href="/signup">
                <button type="button" class="ant-btn ant-btn-secondary">
                  <span>Sign Up</span>
                </button>
              </a>
            </div>
          </div>
          <div
            class="hamburger"
            onClick={() => {
              let name = "Header__Wrapper-sc-1dgub2e-0 eQfyfb active";
              if (this.state.class === "Header__Wrapper-sc-1dgub2e-0 eQfyfb active")
                name = "Header__Wrapper-sc-1dgub2e-0 eQfyfb";
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

export default NavBarLogin;
