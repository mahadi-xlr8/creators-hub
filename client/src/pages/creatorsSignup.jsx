import React, { Component } from "react";
import NevBar from "../components/nevBar";
import InputText from "../components/inputText";
import InputPassword from "../components/inputPassword";
import FileUpload from "../components/fileUpload";
import SubmitButton from "../components/submitButton";
import { Link } from "react-router-dom";
import DragAndDropUpload from "../components/dragAndDrop";
class CreatorSignup extends React.Component {
  state = {
    name: "",

    email: "",
    password: "",
    cPassword: "",
    profileUrl: "",
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
    console.log(data)
    this.setState({profileUrl:data})
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
                  <InputText
                    placeholder="full name"
                    value={this.state.firstName}
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
                  
                  <h3 className="personal-info">upload your pictures</h3>
                  <p className="subtext require">profile photo is required!</p>
                  <DragAndDropUpload onUpload={this.profileUpload}/>
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
