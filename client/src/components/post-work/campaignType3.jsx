import LeftSide from "./leftSide";
import Message from "./message";
import JobInput from "./jobInput";
import Dropdown from "../brandPost-components/dropdown";
import { useState } from "react";
import TextArea from "./textArea";
import DragAndDropUpload from "../dragAndDrop";
import Joi from "joi";

const CampaignType = (props) => {
  const [images, setImages] = useState([]);
  const [validation, setValidation] = useState("");
  const platform = [
    { name: "Youtube", img: "/images/creators/icons/youtube.png" },
    { name: "Facebook", img: "/images/creators/icons/facebook.png" },
    { name: "Instagram", img: "/images/creators/icons/instagram.svg" },
  ];
  const contentType = [
    { name: "Video" },
    { name: "Shorts" },
    { name: "Post" },
    { name: "Story" },
    { name: "Reel" },
  ];

  const dataValidation = Joi.object({
    benefit: props.paid
      ? Joi.string().max(20).required()
      : Joi.string().max(150).required(),
    image: Joi.array().items(Joi.string()).min(1).max(3).required(),
    platform: Joi.string().max(20).required(),
    content_type: Joi.string().max(20).required(),
  });

  const handleNext = () => {
    const { error } = dataValidation.validate({
      benefit: props.benefit,
      image: images,
      platform: props.platform.name,
      content_type: props.content.name,
    });
    if (error) setValidation(error.details[0].message);
    else {
      props.next();
      setValidation("");
    }
  };

  const handleFileUpload = (data) => {
    let check = true;
    for (let i of images) {
      if (i == data) {
        check = false;
        break;
      }
    }
    if (check) {
      setImages((prev) => {
        return [...prev, data];
      });
      props.onImageChange(data);
    }
  };

  return (
    <>
      <LeftSide
        heading="What kind of influncer do you want for this job?"
        description="By specifying influencers, it will help influncers to check wether are they aligeble for the job or not!"
      />
      <div className="right-side">
        <Message text="Is it a paid campaign?" />
        <div className="is-paid">
          <div className="yes">
            <input
              type="radio"
              id="yes"
              checked={props.paid}
              onChange={() => {
                props.onPaidChange(true);
              }}
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="no" style={{ marginBottom: "1rem" }}>
            <input
              type="radio"
              id="no"
              checked={!props.paid}
              onChange={() => {
                props.onPaidChange(false);
              }}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        {/* if paid campaign */}
        {props.paid ? (
          <>
            <Message text="How much you're offering for the influencer?" />
            <JobInput
              value={props.benefit}
              onChange={(e) => props.onTextChange(e, "benefit")}
            />
          </>
        ) : (
          ""
        )}

        {/* if not paid */}

        {!props.paid ? (
          <>
            <Message text="What the influencer will get from this campaign?" />
            <TextArea
              value={props.benefit}
              onChange={(e) => {
                props.onTextChange(e, "benefit");
              }}
            />
          </>
        ) : (
          ""
        )}
        {/* image upload */}
        <Message text="Upload one or more images of the product you want to promote." />
        <DragAndDropUpload
          maxFile={3}
          path="/products"
          onUpload={handleFileUpload}
        />
        {/* platform type */}
        <Message text="which platform you want use for this campaign?" />
        <Dropdown
          placeholder="required"
          values={platform}
          selectedData={props.platform}
          field="platform"
          onChange={props.onDropdownChange}
        />

        {/* content type */}
        <Message text="What kind of content you want for this campaign?" />
        <Dropdown
          placeholder="content type"
          values={contentType}
          onChange={props.onDropdownChange}
          selectedData={props.content}
          field="content"
        />
        <p className="job-validation-message">{validation}</p>
        <div className="job-buttons">
          <button className=" back-button" onClick={props.back}>
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
            Back
          </button>
          <button className=" next-button" onClick={handleNext}>
            {props.submit ? "Post Job" : "Next Scope"}
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CampaignType;
