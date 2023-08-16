import React, { Component } from "react";
import NevBar from "../components/nevBar";
import InputText from "../components/inputText";
import InputPassword from "../components/inputPassword";
import FileUpload from "../components/fileUpload";
import SubmitButton from "../components/submitButton";
import { Link } from "react-router-dom";
class BrandsSignup extends React.Component {
  state = {
    firstName: "",
    lastName: "",

    email: "",
    password: "",
    cPassword: "",
    website:'',
    profile: null,
    otherPhoto: null,

  };
  firstNameChange = (data) => {
    this.setState({ firstName: data });
  };
  lastNameChange = (data) => {
    this.setState({ lastName: data });
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
  profileChange = (data) => {
    console.log(data.fullName);
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
                  <InputText
                    placeholder="first name"
                    value={this.state.firstName}
                    onChange={this.firstNameChange}
                  />
                  <InputText
                    placeholder="last name"
                    value={this.state.lastName}
                    onChange={this.lastNameChange}
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
                  <FileUpload label="Brand's Logo" onClick={this.profileChange} />

                  <SubmitButton />
                  <div class="sub-links">
                    Already have an account? <Link to="/brands/login">Log In</Link>
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
