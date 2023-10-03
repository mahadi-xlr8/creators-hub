import React, { Component } from "react";
import NevBar from "../components/nevBar";
import InputText from "../components/inputText";
import InputPassword from "../components/inputPassword";
import FileUpload from "../components/fileUpload";
import SubmitButton from "../components/submitButton";
import { Link } from "react-router-dom";
import OrLine from "../components/login-creator/orLine";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
class CreatorsLogin extends React.Component {
  state = {
    email: "",
    password: "",
  };

  emailChange = (data) => {
    this.setState({ email: data });
  };
  passwordChange = (data) => {
    this.setState({ password: data });
  };

  onFacebookSuccess = ({ data }) => {
    // console.log(data.userID, data.accessToken);

    const userAccessToken = data.accessToken;
    const fields = "email,name,birthday,gender,link,location";
    axios
      .get(
        `https://graph.facebook.com/v13.0/me?fields=${fields}&access_token=${userAccessToken}`
      )
      .then((res) => {
        const info = res.data;

        axios
          .post("/login/fb/new", {
            id: data.userID,
            accessToken: data.accessToken,
            name: info.name,
            birthday: info.birthday,
            profileLink: info.link,
            email: info.email,
            location: info.location.name,
          })
          .then((res) => {
            Cookies.set("access-token", res.headers["x-access-token"], {
              expires: 60,
            });
            window.location.replace("/")
            toast.success(res.data);
          })
          .catch((err) => {
            toast(err.response.data, {
              icon: "❌",
              duration: 2000,
            });
          });
      })
      .catch((err) =>
        toast("Something went wrong!", {
          icon: "❌",
          duration: 2000,
        })
      );
  };
  render() {
    return (
      <>
        <NevBar login={false} userType="Creator" />
        <div className="signup-baap">
          <div className="creator-signup">
            <section className="form-container">
              <form action="" className="form-text">
                <img
                  src="/images/all/pages/home/hashtag.svg"
                  className="hashtag"
                  alt=""
                />
                <h1>Good to have you back!</h1>
                <p className="subtext login">
                  Please login to colab with brands.
                </p>
                <div className="form-row">
                  <InputText
                    placeholder="Email Address"
                    value={this.state.email}
                    type="email"
                    onChange={this.emailChange}
                  />
                  <InputPassword
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.passwordChange}
                  />
                  <p className="sub-links forget">Forget Password?</p>
                  <SubmitButton />
                  <div class="sub-links">
                    Don't have an account?{" "}
                    <Link to="/creator/signup">Sign Up</Link>
                  </div>
                </div>
              </form>
              <OrLine />
              <div className="facebook-login">
                <LoginSocialFacebook
                  isOnlyGetToken
                  appId={"311104531407144"}
                  onResolve={this.onFacebookSuccess}
                  onReject={(err) => {
                    console.log(err.message);
                  }}
                  fields="name,email,picture"
                  scope="user_location user_link"
                >
                  <FacebookLoginButton />
                </LoginSocialFacebook>
              </div>
            </section>
            <section className="img-slider">
              <img src="/images/creators/mehazabien/img1.jpg" alt="" />
            </section>
          </div>
          <div class="sub-links brand login">
            Are you a brand? <Link to="/brands/login">Log In Here</Link>
          </div>
        </div>
      </>
    );
  }
}

export default CreatorsLogin;
