import React, { Component } from "react";
import NevBar from "../components/nevBar";
import InputText from "../components/inputText";
import InputPassword from "../components/inputPassword";
import FileUpload from "../components/fileUpload";
import SubmitButton from "../components/submitButton";
import { Link } from "react-router-dom";
class CreatorSignup extends React.Component {
  state = {
    firstName: "",
    lastName: "",

    email: "",
    password: "",
    cPassword: "",
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
  profileChange = (data) => {
    console.log(data.fullName);
  };

  render() {
    return (
      <>
        <NevBar login={false} userType="Creator" />
        <div className="signup-baap">
          <div className="creator-signup">
            <section className="img-slider">
              <img src="/images/creators/mehazabien/img1.jpg" alt="" />
              <img
                className="img2"
                src="/images/creators/mehazabien/img2.jpg"
                alt=""
              />
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
                  <h3 className="personal-info">Social Links:</h3>
                  <p className="subtext require">one is required!</p>
                  <InputText placeholder="Facebook" />
                  <InputText placeholder="Instagram" />
                  <InputText placeholder="Youtube" />
                  <h3 className="personal-info">upload your pictures</h3>
                  <p className="subtext require">profile photo is required!</p>
                  <FileUpload label="Profile" onClick={this.profileChange} />
                  <FileUpload label="Other" />
                  <SubmitButton />
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
