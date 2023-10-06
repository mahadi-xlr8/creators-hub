import NevBar from "../components/nevBar";
import React from "react";
import NameDetails from "../components/post-work/nameDetails";
import InfluencerType from "../components/post-work/influnerType2";
import CampaignType from "../components/post-work/campaignType3";
import BrandDescription from "../components/post-work/brandDescription";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
class PostNewWork extends React.Component {
  state = {
    step: 0,
    stepComponent: [],
    totalSteps: 3,
  };
  constructor() {
    super();
    axios
      .get("/brand/profileComplete", {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
      })
      .then((res) => {
        if (res.data.profileComplete) {
          this.setState({
            stepComponent: [
              <NameDetails next={this.handleNext} back={this.handleBack} />,
              <InfluencerType next={this.handleNext} back={this.handleBack} />,
              <CampaignType
                next={this.handleNext}
                back={this.handleBack}
                submit={true}
              />,
            ],
          });
        } else {
          this.setState({
            stepComponent: [
              <NameDetails next={this.handleNext} back={this.handleBack} />,
              <InfluencerType next={this.handleNext} back={this.handleBack} />,
              <CampaignType
                next={this.handleNext}
                back={this.handleBack}
                submit={false}
              />,
              <BrandDescription
                next={this.handleNext}
                back={this.handleBack}
              />,
            ],
          });
          this.setState({ totalSteps: 4 });
        }
      });
  }

  handleNext = () => {
    if (this.state.step + 1 < this.state.totalSteps) {
      const prev = this.state.step;
      this.setState({ step: prev + 1 });
    }
  };

  handleBack = () => {
    if (this.state.step - 1 >= 0) {
      const prev = this.state.step;
      this.setState({ step: prev - 1 });
    }
  };
  render() {
    return (
      <div>
        <NevBar
          login={true}
          userType="Post New Work"
          name="Google"
          role="brand"
        />
        <div className="work-form-container">
          {this.state.stepComponent[this.state.step]}
        </div>
      </div>
    );
  }
}

export default PostNewWork;
