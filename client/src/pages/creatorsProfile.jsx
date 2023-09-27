import { useParams } from "react-router-dom";
import NavBarLogin from "../components/navBarLogin";
import BackButton from "../components/backButton";
import CreatorNameBlock from "../components/creatorNameBlock";
import CreatorQualification from "../components/creatorQualification";
import CreatorImages from "../components/creatorsImages";
import { getCreatorsByName } from "../DB";
import PreviousWork from "./previousWork";
import NevBar from "../components/nevBar";

import Footer from "./footer";
import { useState } from "react";
const CreatorsProfile = (props) => {
  const { id } = useParams();
  const data = props.data;
  const [isFlipped, setFlipped] = useState(false);
  return (
    <>
      <NevBar
        login={props.login}
        userType={props.data.role}
        role={props.data.role}
        profilePage={true}
      />
      <div className="htgZbY">
        <div className="creator-body">
          <BackButton />
          <div className="campaign-body">
            <CreatorNameBlock
              name={props.data.name}
              joined={props.data.joined}
              tags={data.tags}
            />
            <CreatorImages image={data.profileImg} />
            <CreatorQualification data={data} />
          </div>
        </div>

        {/* TODO: complete previous work after finishing the backend */}
        {/* <div className="previous-works">
          <h1>previous works</h1>
          <PreviousWork name={data.name} isFlipped={isFlipped} handleFlipped={()=>{
            setFlipped(!isFlipped)
          }}/>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default CreatorsProfile;
