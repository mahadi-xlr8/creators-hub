import React, { Component } from "react";
import CollaborationCard from "../components/collaborationCard";
import ReactCardFlip from "react-card-flip";
import CollaborationCardBack from "../components/collaborationCardBack";
import { useEffect, useState } from "react";
import axios from "axios";
function PreviousWork(props) {
  const [flipped, setFlipped] = useState(false);
  const handleFlipped = () => {
    setFlipped((prev) => !prev);
  };
  return (
    <>
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
          <CollaborationCard
            collaborationInfo={props.data}
            onClick={handleFlipped}
          />
          <CollaborationCardBack
            onClick={handleFlipped}
            collaborationInfo={props.data}
          />
        </ReactCardFlip>
    </>
  );
}

export default PreviousWork;
