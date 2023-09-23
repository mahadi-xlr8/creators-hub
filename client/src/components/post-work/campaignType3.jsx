import LeftSide from "./leftSide";
import Message from "./message";
import JobInput from "./jobInput";
import Dropdown from "../brandPost-components/dropdown";
import { useState } from "react";
import TextArea from "./textArea";

const CampaignType = (props) => {
  const [paid, setPaid] = useState(true);
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

  function handlePlatform(value) {
    console.log(value);
  }
  function handleContent(value) {
    console.log(value);
  }

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
              checked={paid}
              onChange={() => {
                setPaid(true);
              }}
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="no" style={{ marginBottom: "1rem" }}>
            <input
              type="radio"
              id="no"
              checked={!paid}
              onChange={() => {
                setPaid(false);
              }}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        {/* if paid campaign */}
        {paid ? (
          <>
            <Message text="How much you're offering for the influencer?" />
            <JobInput />
          </>
        ) : (
          ""
        )}

        {/* if not paid */}

        {!paid ? (
          <>
            <Message text="What the influencer will get from this campaign?" />
            <TextArea />
          </>
        ) : (
          ""
        )}
        {/* image upload */}
        <Message text="Upload one or more images of the product you want to promote." />
        <input type="file" name="" id="" />
        {/* platform type */}
        <Message text="which platform you want use for this campaign?" />
        <Dropdown
          placeholder="platform"
          values={platform}
          onClick={handlePlatform}
        />

        {/* content type */}
        <Message text="What kind of content you want for this campaign?" />
        <Dropdown
          placeholder="content type"
          values={contentType}
          onClick={handleContent}
        />
        <div className="job-buttons">
          <button className=" back-button" onClick={props.back}>
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
            Back
          </button>
          <button className=" next-button" onClick={props.next}>
            Next Scope
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CampaignType;
