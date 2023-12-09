import { extend } from "joi";
import React, { Component } from "react";
import NevBar from "../components/nevBar";
import axios from "axios";
import Cookies from "js-cookie";
import Input from "../components/edit-profile/input";
import DragAndDropUpload from "../components/dragAndDrop";
import PlatformLink from "../components/edit-profile/iconDropdown";
import Tags from "../components/edit-profile/tags";
import TextArea from "../components/post-work/textArea";
import UpdateButton from "../components/edit-profile/updateButton";
import ModalWrapper from "../components/helper/modalWrapper";
import JobInput from "../components/post-work/jobInput";
import toast from "react-hot-toast";
import NewPasswordValidation from "../components/helper/newPasswordValidation";
import Dropdown from "../components/brandPost-components/dropdown";
class CreatorProfileEdit extends React.Component {
  state = {
    selectedIcon: { name: "" },
    passwordModal: false,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    errorMessage: "",
  };
  constructor() {
    super();
    const temp = window.location.href.split("/");
    const id = temp[temp.length - 1];
    axios
      .get("/creator/byId", {
        headers: { "access-token": Cookies.get("access-token") },
        params: { id },
      })
      .then((res) => {
        this.setState({ creator: res.data, platforms: res.data.platforms });
      });
  }
  onPlatformChange = (value, field) => {
    const prev = this.state.creator;
    prev.platforms.map((e) => {
      if (e.name === field) {
        return (e.link = value);
      }
    });
    this.setState({ creator: prev });
  };
  handleDescriptionChange = (e) => {
    const prevCreator = this.state.creator;
    prevCreator.description = e.target.value;
    this.setState({ creator: prevCreator });
  };

  handleTags = (data) => {
    const prev = this.state.creator;
    prev.tags = data;
    this.setState({ creator: prev });
  };
  handlePasswordChange = () => {
    const { error } = NewPasswordValidation({
      current_password: this.state.currentPassword,
      new_password: this.state.newPassword,
      confirm_password: this.state.confirmPassword,
    });
    if (error) {
      this.setState({ errorMessage: error.details[0].message });
      return;
    }

    const promise = axios.post(
      "/creator/change-password",
      {
        currentPassword: this.state.currentPassword,
        newPassword: this.state.newPassword,
        confirmPassword: this.state.confirmPassword,
      },
      {
        headers: { "access-token": Cookies.get("access-token") },
      }
    );
    toast.promise(promise, {
      loading: "Loading...",
      success: (res) => {
        this.setState({
          passwordModal: false,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
          errorMessage: "",
        });
        return res.data;
      },
      error: (err) => {
        this.setState({
          currentPassword: "",
          errorMessage: "",
        });
        return err.response.data;
      },
    });
  };

  handleDropdown = (value, field) => {
    const prev = this.state;
    prev[field] = value;
    this.setState(prev);
  };
  imgUpload = (data) => {
    const prev = this.state.creator;
    prev.profileImg = data;
    this.setState({ creator: prev });
  };
  handleUpdate = () => {
    const { creator } = this.state;
    if (creator.price) {
      const price = parseInt(creator.price);
      if (isNaN(price)) {
        toast.error("Price should be a nubmer!");
        return;
      }
      creator.price = price;
    }

    if (this.state.age) {
      creator.age = Number(this.state.age.name);
    }
    if (this.state.country) {
      creator.country = this.state.country.name;
    }
    if (this.state.gender) {
      creator.gender = this.state.gender.name;
    }
    let complete = false;
    if (
      creator.age &&
      creator.gender &&
      creator.country &&
      creator.title &&
      creator.description &&
      creator.price &&
      creator.tags.length > 0 && 
      creator.payment.length >= 11
    ) {
      complete = true;
    }
    let temp = false;
    for (let platform of creator.platforms) {
      if (platform.link != "") temp = true;
    }
    creator.profileComplete = complete && temp;
    const id=creator._id;
    console.log(id)
    delete creator._id;

    const promise = axios.post(
      "/creator/update-profile",
      { creator },
      {
        headers: { "access-token": Cookies.get("access-token") },
      }
    );

    toast.promise(promise, {
      loading: "Updating...",
      success: (res) => {
        window.location.assign(`/creator/${id}`);
        return res.data;
      },
      error: (err) => {
        return err.response.data;
      },
    });
  };

  render() {
    const { creator } = this.state;
    const age = [];
    for (let i = 14; i <= 100; i++) {
      let text = i.toString();
      let temp = { name: text };
      age.push(temp);
    }
    return (
      <>
        <NevBar />
        {this.state.creator ? (
          <>
            <div className="edit-profile-container">
              <div className="left-side">
                <p className="change-profile-img">Change Profile Image</p>
                <DragAndDropUpload onUpload={this.imgUpload} path="/creator" />
                <div style={{ padding: "0 1rem" }}>
                  {!creator.age ? (
                    <Dropdown
                      placeholder="Age"
                      values={age}
                      selectedData={
                        this.state.age ? this.state.age : { name: "" }
                      }
                      onChange={this.handleDropdown}
                      field="age"
                    />
                  ) : null}
                </div>
                {!creator.gender ? (
                  <div style={{ padding: "0 1rem" }}>
                    <Dropdown
                      placeholder="Gender"
                      values={[
                        { name: "male" },
                        { name: "female" },
                        { name: "other" },
                      ]}
                      selectedData={
                        this.state.gender ? this.state.gender : { name: "" }
                      }
                      onChange={this.handleDropdown}
                      field="gender"
                    />
                  </div>
                ) : null}
                <Input
                  placeholder="enter your name"
                  label="Name"
                  value={creator.name}
                  readOnly={true}
                />
                <Input
                  placeholder="enter your email"
                  label="Email"
                  value={creator.email}
                  readOnly={true}
                />
              </div>
              <div className="right-side">
                <PlatformLink
                  onChange={this.onPlatformChange}
                  values={this.state.creator.platforms}
                />
                <Tags
                  tags={this.state.creator.tags ? creator.tags : [""]}
                  updateTag={this.handleTags}
                />
                {!creator.country ? (
                  <Dropdown
                    placeholder="Country"
                    values={[
                      {
                        name: "Bangladesh",
                        img: "https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/bd.svg",
                      },
                      {
                        name: "India",
                        img: "https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/in.svg",
                      },
                      {
                        name: "USA",
                        img: "https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/us.svg",
                      },
                      {
                        name: "Canada",
                        img: "https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/ca.svg",
                      },
                    ]}
                    field="country"
                    onChange={this.handleDropdown}
                    selectedData={
                      this.state.country ? this.state.country : { name: "" }
                    }
                  />
                ) : null}
                <div style={{ paddingBottom: "10px" }}>
                  <JobInput
                    placeholder="Bkash Number"
                    value={creator.payment}
                    onChange={(e) => {
                      creator.payment = e.target.value;
                      this.setState({ creator });
                    }}
                  />
                </div>
                <div style={{ paddingBottom: "10px" }}>
                  <JobInput
                    placeholder="Bio"
                    value={creator.title}
                    onChange={(e) => {
                      creator.title = e.target.value;
                      this.setState({ creator });
                    }}
                  />
                </div>
                <div style={{ paddingBottom: "10px" }}>
                  <JobInput
                    placeholder="Price for one post"
                    value={creator.price}
                    onChange={(e) => {
                      creator.price = e.target.value;
                      this.setState({ creator });
                    }}
                  />
                </div>
                <TextArea
                  placeholder="Write about yourself."
                  value={creator.description ? creator.description : ""}
                  onChange={this.handleDescriptionChange}
                />

                <div className="buttons-container">
                  {this.state.creator.password && (
                    <UpdateButton
                      text="Change Password"
                      password={true}
                      onPasswordChange={() => {
                        this.setState({
                          passwordModal: true,
                        });
                      }}
                    />
                  )}
                  <UpdateButton
                    text="update profile"
                    onClick={this.handleUpdate}
                  />
                </div>
              </div>
            </div>
            {this.state.creator.password && (
              <ModalWrapper
                isOpen={this.state.passwordModal}
                onClose={() => {
                  this.setState({
                    passwordModal: false,
                  });
                }}
              >
                <div className="change-password-container">
                  <img
                    src="/images/icons/cancel-black.svg"
                    alt=""
                    className="cancel-icon"
                    onClick={() => this.setState({ passwordModal: false })}
                  />
                  <JobInput
                    placeholder="current password"
                    value={this.state.currentPassword}
                    onChange={(e) => {
                      this.setState({ currentPassword: e.target.value });
                    }}
                  />
                  <JobInput
                    placeholder="new password"
                    value={this.state.newPassword}
                    onChange={(e) => {
                      this.setState({ newPassword: e.target.value });
                    }}
                  />
                  <JobInput
                    placeholder="confirm password"
                    value={this.state.confirmPassword}
                    onChange={(e) =>
                      this.setState({ confirmPassword: e.target.value })
                    }
                  />
                  <p className="error-message" style={{ color: "red" }}>
                    {this.state.errorMessage}
                  </p>
                  <UpdateButton
                    text="Change Password"
                    onClick={this.handlePasswordChange}
                  />
                </div>
              </ModalWrapper>
            )}
          </>
        ) : (
          <h1>please wait data is fetching...</h1>
        )}
      </>
    );
  }
}

export default CreatorProfileEdit;
