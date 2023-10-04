import React, { Component } from "react";
import NevBar from "../components/nevBar";
import InputText from "../components/inputText";
import InputPassword from "../components/inputPassword";
import FileUpload from "../components/fileUpload";
import SubmitButton from "../components/submitButton";
import toast from "react-hot-toast";
import axios from "axios"
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
class BrandsLogin extends React.Component {
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
  handleSubmit = () => {
    axios
      .post("/brand/login", {
        email: this.state.email,
        password: this.state.password,
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
  };

  render() {
    return (
      <>
        <NevBar login={false} userType="Brand" />
        <div className="signup-baap">
          <div className="creator-signup">
            <section className="form-container">
              <form action="" className="form-text brand-signup">
                <img
                  src="/images/creators/icons/arrow-brand-signup.svg"
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
                  <SubmitButton onClick={this.handleSubmit} />
                  <div class="sub-links">
                    Don't have an account?{" "}
                    <Link to="/brands/signup">Sign Up</Link>
                  </div>
                </div>
              </form>
            </section>
            <section className="img-slider">
              <img src="/images/creators/mehazabien/img1.jpg" alt="" />
            </section>
          </div>
          <div class="sub-links brand login">
            Are you a creator? <Link to="/creators/login">Log In Here</Link>
          </div>
        </div>
      </>
    );
  }
}

export default BrandsLogin;
