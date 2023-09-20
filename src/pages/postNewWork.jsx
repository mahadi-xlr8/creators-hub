import NevBar from "../components/nevBar";
import NameDetails from "../components/post-work/nameDetails";
import InfluencerType from "../components/post-work/influnerType2";
import CampaignType from "../components/post-work/campaignType3";
import BrandDescription from "../components/post-work/brandDescription";
import { useState } from "react";
const PostNewWork = (props) => {
  const [step, setStep] = useState(0);
  const steps = [
    <NameDetails next={handleNext} back={handleBack}/>,
    <InfluencerType next={handleNext} back={handleBack}/>,
    <CampaignType next={handleNext} back={handleBack}/>,
    <BrandDescription next={handleNext} back={handleBack}/>,
  ];

  function handleNext() {
    if (step + 1 == steps.length) {
      setStep(0);
    } else setStep(step + 1);
    console.log(step)
  }

  function handleBack(){
    if(step-1<0)setStep(0)
    else setStep(step-1)
  }

  function getElement(value) {
    return steps[value];
  }
  return (
    <div>
      <NevBar
        login={true}
        userType="Post New Work"
        name="Google"
        role="brand"
      />
      <div className="work-form-container">{getElement(step)}</div>
    </div>
  );
};

export default PostNewWork;
