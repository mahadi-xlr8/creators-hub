import LeftSide from "./leftSide";
import Message from "./message";
import JobInput from "./jobInput";
import TextArea from "./textArea";
import { useState } from "react";
import Joi from "joi";

const NameDetails = (props) => {
  const dataValidation = Joi.object({
    title: Joi.string().max(100).required(),
    description: Joi.string().max(1000).required(),
  });
  const [validation, setValidation] = useState("");
  const handleNext = () => {
    const { error } = dataValidation.validate({
      title: props.title,
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
        heading="Let's start with the Title and Description of the campaign."
        description="lol"
      />
      <div className="right-side">
        <Message text="Write a title for your job post" />
        <JobInput
          value={props.title}
          onChange={(e) => props.onChange(e, "title")}
        />
        <Message text="Write a brief description about the job" />
        <TextArea
          value={props.description}
          onChange={(e) => props.onChange(e, "description")}
        />
        <p className="job-validation-message">{validation}</p>
        <div className="job-buttons">
          <button className=" back-button" onClick={props.back}>
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
            Back
          </button>
          <button className=" next-button" onClick={handleNext}>
            Next Scope
            <img src="/images/icons/next-arrow.png" alt="" srcset="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NameDetails;
