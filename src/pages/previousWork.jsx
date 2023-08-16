import React, { Component,useState } from "react";

import NevBar from "../components/nevBar";
import CollaborationCard from "../components/collaborationCard";
import {
  getCreatorsByName,
  getPreviousWorksByName,
  getBrandsByName,
} from "../DB";

import ReactCardFlip from "react-card-flip";
import CollaborationCardBack from "../components/collaborationCardBack";

function PreviousWork (props) {

    let prevWork = getPreviousWorksByName(props.name);
    console.log(prevWork);

    return (
      <>
        <div className="previous-work-container">
          {prevWork.map((e) => (
            <>
              <ReactCardFlip
                isFlipped={props.isFlipped}
                flipDirection="vertical"
          
              >
                <CollaborationCard
                  collaborationInfo={e}
                  brandInfo={getBrandsByName(e.brandName)}
                  creatorInfo={getCreatorsByName(props.name)[0]}
                  onClick={props.handleFlipped}
                />
                <CollaborationCardBack onClick={props.handleFlipped} collaborationInfo={e}/>
              </ReactCardFlip>
            </>
          ))}
        </div>
      </>
    );
  
}

export default PreviousWork;
