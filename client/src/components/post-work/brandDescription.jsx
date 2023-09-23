import LeftSide from "./leftSide";
import Message from "./message";
import JobInput from "./jobInput";
import TextArea from "./textArea";

const BrandDescription = (props) => {
  return (
    <>
      <LeftSide
        heading="Now, let's talk about the brand."
        description="What kind of brand your are? you only have to write it once."
      />
      <div className="right-side">
        
        <Message text="Write down about yourself." />
        <TextArea />
        <Message text="Do you have any social media account or website? if so then give us the link." />
        <JobInput />
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

export default BrandDescription;
