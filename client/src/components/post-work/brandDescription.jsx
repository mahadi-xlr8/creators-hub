import LeftSide from "./leftSide";
import Message from "./message";
import JobInput from "./jobInput";
import TextArea from "./textArea";
import { useState } from "react";

const BrandDescription = (props) => {
  const [aboutBrand, setAboutBrand] = useState("");
  const [brandSocial, setBrandSocial] = useState("");
  const handleAboutBrand = (e) => {
    setAboutBrand(e.target.value);
  };
  const handleBrandSocial = (e) => {
    setBrandSocial(e.target.value);
  };
  return (
    <>
      <LeftSide
        heading="Now, let's talk about the brand."
        description="What kind of brand your are? you only have to write it once."
      />
      <div className="right-side">
        <Message text="Write down about yourself." />
        <TextArea value={aboutBrand} onChange={handleAboutBrand} />
        <Message text="Do you have any social media account? if so then give us the link." />
        <JobInput value={brandSocial} onChange={handleBrandSocial} />
        <div className="job-buttons">
          <button className=" back-button" onClick={props.back}>
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
            Back
          </button>
          <button className=" next-button" onClick={props.next}>
            Post Job
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandDescription;
