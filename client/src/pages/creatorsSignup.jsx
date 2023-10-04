import React, { Component } from "react";
import NevBar from "../components/nevBar";
import InputText from "../components/inputText";
import InputPassword from "../components/inputPassword";
import SubmitButton from "../components/submitButton";
import { Link } from "react-router-dom";
import DragAndDropUpload from "../components/dragAndDrop";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import SignupDataValidation from "../components/helper/signupDataValidation";
import OrLine from "../components/login-creator/orLine";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
class CreatorSignup extends React.Component {
  state = {
    name: "",

    email: "",
    password: "",
    cPassword: "",
    profileUrl: "",
    error: "",
  };
  nameChange = (data) => {
    this.setState({ name: data });
  };
  emailChange = (data) => {
    this.setState({ email: data });
  };
  passwordChange = (data) => {
    this.setState({ password: data });
  };
  cPasswordChange = (data) => {
    this.setState({ cPassword: data });
  };
  profileUpload = (data) => {
    this.setState({ profileUrl: data });
  };
  handleSubmit = () => {
    const { error } = SignupDataValidation({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.cPassword,
      profile_photo: this.state.profileUrl,
    });
    if (error) {
      this.setState({ error: error.details[0].message });
    } else {
      axios
        .post("/login/creator/signup", {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          profile_photo: this.state.profileUrl,
        })
        .then((res) => {
          Cookies.set("access-token", res.headers["x-access-token"], {
            expires: 60,
          });
          window.location.replace("/");
          toast.success(res.data);
        })
        .catch((err) => {
          toast(err.response.data, {
            icon: "❌",
            duration: 2000,
          });
        });
      this.setState({ error: "" });
    }
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
          .post("/creator/fb/signup", {
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
            window.location.replace("/");
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
            <section className="img-slider">
              <img src="/images/creators/mehazabien/img1.jpg" alt="" />
            </section>
            <section className="form-container">
              <form action="" className="form-text">
                <img
                  src="/images/all/pages/home/hashtag.svg"
                  className="hashtag"
                  alt=""
                />
                <h1>welcome to Influencer's Hub!</h1>
                <p className="subtext">Let's get you started.</p>
                <div className="form-row">
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
                  <OrLine />
                  <InputText
                    placeholder="full name"
                    value={this.state.name}
                    onChange={this.nameChange}
                  />
                  <InputText
                    placeholder="email"
                    value={this.state.email}
                    type="email"
                    onChange={this.emailChange}
                  />
                  <InputPassword
                    value={this.state.password}
                    placeholder="password"
                    onChange={this.passwordChange}
                    cpassword={false}
                  />
                  <InputPassword
                    value={this.state.cPassword}
                    placeholder="comfirm password"
                    onChange={this.cPasswordChange}
                    password={this.state.password}
                  />

                  <h3 className="personal-info">upload your pictures</h3>
                  <p className="subtext require">profile photo is required!</p>
                  <DragAndDropUpload
                    onUpload={this.profileUpload}
                    value={this.state.profileUrl}
                  />
                  <p className="validation-message">{this.state.error}</p>
                  <SubmitButton onClick={this.handleSubmit} text="SignUp"/>
                  <div class="sub-links">
                    Already have an account? <a href="/login">Log In</a>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div class="sub-links brand">
            Are you a Brand? <Link to="/brands/signup">Sign Up Here</Link>
          </div>
        </div>
      </>
    );
  }
}

export default CreatorSignup;
