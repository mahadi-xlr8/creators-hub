import { useParams } from "react-router-dom";
import BackButton from "../components/backButton";
import CreatorNameBlock from "../components/creatorNameBlock";
import CreatorQualification from "../components/creatorQualification";
import CreatorImages from "../components/creatorsImages";
import { getCreatorsByName } from "../DB";
import PreviousWork from "./previousWork";
import NevBar from "../components/nevBar";
import Footer from "./footer";
import { useState } from 'react';
const Profile = (props) => {
  const data = getCreatorsByName(props.name)[0];
  const [isFlipped,setFlipped]= useState(false)
  return (
    <>
      <NevBar profile={true} role='brand'/>
      <div className="htgZbY">
        <div className="creator-body">
          <BackButton />
          <div className="campaign-body">
            <CreatorNameBlock name={props.name} tags={data.tags}/>
            <CreatorImages images={data.images} />
            <CreatorQualification data={data}/>
            
          </div>
        </div>
        <div className="previous-works">
          <h1>previous works</h1>
          <PreviousWork name={props.name} isFlipped={isFlipped} handleFlipped={()=>{
            setFlipped(!isFlipped)
          }}/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
