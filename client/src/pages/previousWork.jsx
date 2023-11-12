import React, { Component } from "react";

import NevBar from "../components/nevBar";
import CollaborationCard from "../components/collaborationCard";
import {
  getCreatorsByName,
  getPreviousWorksByName,
  getBrandsByName,
} from "../DB";

import ReactCardFlip from "react-card-flip";
import CollaborationCardBack from "../components/collaborationCardBack";
import { useEffect, useState } from "react";
import axios from "axios";
function PreviousWork(props) {
  let prevWork = getPreviousWorksByName(props.name);
  const [prevWorks, setPrevWorks] = useState([]);
  useEffect(() => {
    axios
      .get(`/creator/previous-work?id=${props.id}`)
      .then((res) => {
        setPrevWorks(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <>
      <div className="previous-work-container">
        {prevWorks.length>0?prevWorks.map((e) => (
          <>
            <ReactCardFlip isFlipped={props.isFlipped} flipDirection="vertical">
              <CollaborationCard
                collaborationInfo={e}
                onClick={props.handleFlipped}
              />
              <CollaborationCardBack
                onClick={props.handleFlipped}
                collaborationInfo={e}
              />
            </ReactCardFlip>
          </>
        )):null}
      </div>
    </>
  );
}

export default PreviousWork;
