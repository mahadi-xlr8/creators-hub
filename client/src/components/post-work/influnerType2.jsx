import LeftSide from "./leftSide";
import Message from "./message";
import Dropdown from "../brandPost-components/dropdown";
import Joi from "joi";
import { useState } from "react";
const InfluencerType = (props) => {
  const followerDropdown = [
    { name: "More than 10k" },
    { name: "More than 50k" },
    { name: "More than 100k" },
    { name: "More than 250k" },
    { name: "More than 500k" },
    { name: "More than 1 Milion" },
  ];

  const countryDropdown = [
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
  ];

  const age = [];
  for (let i = 14; i <= 100; i++) {
    let text = i.toString();
    let temp = { name: text };
    age.push(temp);
  }
  const gender = [
    { name: "Male" },
    { name: "Female" },
    { name: "Other" },
    { name: "Any" },
  ];

  const dataValidation = Joi.object({
    country: Joi.string().max(50).required(),
    gender: Joi.string().max(20).required(),
  });

  const [validation, setValidation] = useState("");

  const handleNext = () => {
    const { error } = dataValidation.validate({
      country: props.country.name,
      gender: props.gender.name,
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
        heading="What kind of influncer do you want for this job?"
        description="By specifying influencers, it will help influncers to check wether are they aligeble for the job or not!"
      />
      <div className="right-side">
        <Message text="How many followers should the influncer have?" />
        <Dropdown
          values={followerDropdown}
          placeholder="Optional"
          onChange={props.onChange}
          selectedData={props.follower}
          field="follower"
        />
        <Message text="Which country you wanna do the campaign?" />
        <Dropdown
          placeholder="Required"
          values={countryDropdown}
          onChange={props.onChange}
          selectedData={props.country}
          field="country"
        />
        <Message text="Minimum age of the influencer" />
        <Dropdown
          placeholder="optional"
          values={age}
          onChange={props.onChange}
          selectedData={props.age}
          field="age"
        />
        <Message text="Prefered gender of the influencer" />
        <Dropdown
          placeholder="required"
          values={gender}
          onChange={props.onChange}
          selectedData={props.gender}
          field="gender"
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

export default InfluencerType;
