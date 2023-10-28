import React, { Component } from "react";
import NevBar from "../components/nevBar";
import InputText from "../components/inputText";
import InputPassword from "../components/inputPassword";
import FileUpload from "../components/fileUpload";
import SubmitButton from "../components/submitButton";
import { Link } from "react-router-dom";
import DragAndDropUpload from "../components/dragAndDrop";
import BrandSignupDataValidation from "../components/helper/brandSignupDataValidation";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import OrLine from "../components/login-creator/orLine";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
class BrandsSignup extends React.Component {
  state = {
    name: "",
    lastName: "",

    email: "",
    password: "",
    cPassword: "",
    website: "",
    profilePhotoUrl: "",
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

  websiteChange = (data) => {
    this.setState({ website: data });
  };
  profileUpload = (data) => {
    this.setState({ profilePhotoUrl: data });
  };
  handleSubmit = () => {
    const { error } = BrandSignupDataValidation({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.cPassword,
      brand_logo: this.state.profilePhotoUrl,
    });
    if (error) {
      this.setState({ error: error.details[0].message });
    } else {
      axios
        .post("/brand/signup", {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          confirm_password: this.state.cPassword,
          profile_photo: this.state.profilePhotoUrl,
          website: this.state.website,
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
          .post("/brand/fb/signup", {
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
        <NevBar login={false} userType="Brand" />
        <div className="signup-baap">
          <div className="creator-signup">
            <section className="img-slider">
              <img src="/images/creators/mehazabien/img1.jpg" alt="" />
            </section>
            <section className="form-container">
              <form action="" className="form-text brand-signup">
                <img
                  src="/images/creators/icons/arrow-brand-signup.svg"
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
                    placeholder="Organization Name"
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
                  />
                  <InputPassword
                    value={this.state.cPassword}
                    placeholder="comfirm password"
                    onChange={this.cPasswordChange}
                  />
                  <InputText
                    placeholder="Website (optional)"
                    value={this.state.website}
                    type="text"
                    onChange={this.websiteChange}
                  />

                  <h3 className="personal-info">Upload your brand picture</h3>
                  <p className="subtext require">Brand Logo is required!</p>
                  <DragAndDropUpload onUpload={this.profileUpload} path="/brand"/>
                  <p className="validation-message">{this.state.error}</p>
                  <SubmitButton
                    onClick={this.handleSubmit}
                    text="Create Account"
                  />
                  <div class="sub-links">
                    Already have an account?{" "}
                    <Link to="/brands/login">Log In</Link>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div class="sub-links brand">
            Are you a Creator? <Link to="/creators/signup">Sign Up Here</Link>
          </div>
        </div>
      </>
    );
  }
}

export default BrandsSignup;
