import NevBar from "../components/nevBar";
import React from "react";
import NameDetails from "../components/post-work/nameDetails";
import InfluencerType from "../components/post-work/influnerType2";
import CampaignType from "../components/post-work/campaignType3";
import BrandDescription from "../components/post-work/brandDescription";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";
class PostNewWork extends React.Component {
  state = {
    step: 1,
    stepComponent: [],
    totalSteps: 3,
    job: {
      title: "",
      description: "",
      follower: { name: "" },
      country: { name: "" },
      age: { name: "" },
      gender: { name: "" },
      paid: true,
      benefit: "",
      platform: { name: "" },
      content: { name: "" },
      images: [],
      brandDescription: "",
      brandSocial: "",
    },
  };

  handleTextChange = (e, field) => {
    const job = this.state.job;
    job[field] = e.target.value;
    this.setState({ job });
  };
  handleDropdown = (data, field) => {
    const job = this.state.job;
    job[field] = data;
    this.setState(data);
  };

  handlePaidChange = (value) => {
    const job = this.state.job;
    job.paid = value;
    this.setState({ job });
  };

  handleImageChange = (image) => {
    const job = this.state.job;
    job.images = [...job.images, image];
    this.setState({ job });
    console.log(this.state.job.images);
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
        this.setState({ profileComplete: res.data.profileComplete });
        if (!res.data.profileComplete) {
          this.setState({ totalSteps: 4 });
        }
      });
  }

  handleNext = () => {
    if (this.state.step + 1 <= this.state.totalSteps) {
      const prev = this.state.step;
      this.setState({ step: prev + 1 });
    } else {
      console.log(this.state.job);
      axios
        .post("/brand/job/new", this.state.job, {
          headers: {
            "access-token": Cookies.get("access-token"),
          },
        })
        .then((res) => {
          window.location.replace(`/brand/post/${res.data.jobId}`);
          toast.success("Job posted successfully!");
        })
        .catch((err) => {
          toast(err.response.data, {
            icon: "❌",
            duration: 2000,
          });
        });
    }
  };

  handleBack = () => {
    if (this.state.step - 1 >= 1) {
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
          {this.state.step === 1 ? (
            <NameDetails
              next={this.handleNext}
              back={this.handleBack}
              onChange={this.handleTextChange}
              title={this.state.job.title}
              description={this.state.job.description}
              onTitleChange={this.handleTitleChange}
              onDescriptionChange={this.handleDescriptionChange}
            />
          ) : undefined}
          {this.state.step === 2 ? (
            <InfluencerType
              next={this.handleNext}
              back={this.handleBack}
              onChange={this.handleDropdown}
              follower={this.state.job.follower}
              country={this.state.job.country}
              age={this.state.job.age}
              gender={this.state.job.gender}
            />
          ) : undefined}
          {this.state.step === 3 ? (
            <CampaignType
              next={this.handleNext}
              back={this.handleBack}
              submit={this.state.profileComplete}
              paid={this.state.job.paid}
              benefit={this.state.job.benefit}
              platform={this.state.job.platform}
              content={this.state.job.content}
              onTextChange={this.handleTextChange}
              onDropdownChange={this.handleDropdown}
              onPaidChange={this.handlePaidChange}
              onImageChange={this.handleImageChange}
            />
          ) : undefined}
          {!this.state.profileComplete && this.state.step === 4 ? (
            <BrandDescription
              next={this.handleNext}
              back={this.handleBack}
              onTextChange={this.handleTextChange}
              description={this.state.job.brandDescription}
              social={this.state.job.brandSocial}
            />
          ) : undefined}
        </div>
      </div>
    );
  }
}

export default PostNewWork;
