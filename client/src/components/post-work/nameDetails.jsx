import LeftSide from "./leftSide";
import Message from "./message";
import JobInput from "./jobInput";
import TextArea from "./textArea";
import { useState } from "react";
const NameDetails = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <>
      <LeftSide
        heading="Let's start with the Title and Description of the campaign."
        description="lol"
      />
      <div className="right-side">
        <Message text="Write a title for your job post" />
        <JobInput value={title} onChange={handleTitleChange} />
        <Message text="Write a brief description about the job" />
        <TextArea value={description} onChange={handleDescriptionChange} />
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

export default NameDetails;
