import LeftSide from "./leftSide";
import Message from "./message";
import JobInput from "./jobInput";
import TextArea from "./textArea";
import { useState } from "react";
import Joi from "joi";

const BrandDescription = (props) => {
  const [validation, setValidation] = useState("");
  const dataValidation = Joi.object({
    description: Joi.string().max(300).required(),
  });

  const handleNext = () => {
    const { error } = dataValidation.validate({
      description: props.description,
    });
    if (error) setValidation(error.details[0].message);
    else {
      props.next();
      setValidation("");
    }
  };
  return (
    <>
      <LeftSide
        heading="Now, let's talk about the brand."
        description="What kind of brand your are? you only have to write it once."
      />
      <div className="right-side">
        <Message text="Write down about yourself." />
        <TextArea
          value={props.description}
          onChange={(e) => props.onTextChange(e, "brandDescription")}
        />
        <Message text="Do you have any social media account? if so then give us the link." />
        <JobInput
          value={props.social}
          onChange={(e) => props.onTextChange(e, "brandSocial")}
        />
        <p className="job-validation-message">{validation}</p>
        <div className="job-buttons">
          <button className=" back-button" onClick={props.back}>
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
            Back
          </button>
          <button className=" next-button" onClick={handleNext}>
            Post Job
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandDescription;
