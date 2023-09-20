import LeftSide from "./leftSide";
import Message from "./message";
import JobInput from "./jobInput";
import Dropdown from "../brandPost-components/dropdown";
const InfluencerType = (props) => {
  const followerDropdown = [
    { name: "less than 10k" },
    { name: "less than 50k" },
    { name: "less than 100k" },
    { name: "Less than 250k" },
    { name: "Less than 500k" },
    { name: "less than 1 Milion" },
    { name: "More than 1 Million" },
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

  function handleFollower(value) {
    console.log(value);
  }
  function handleCountry(value) {
    console.log(value);
  }

  function handleAge(value) {
    console.log(value);
  }

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
          onClick={handleFollower}
        />
        <Message text="Which country you wanna do the campaign?" />
        <Dropdown
          placeholder="Required"
          values={countryDropdown}
          onClick={handleCountry}
        />
        <Message text="Minimum age of the influencer" />
        <Dropdown placeholder="required" values={age} onClick={handleAge} />
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

export default InfluencerType;
