import { useState } from "react";
const CreatorImages = (props) => {
  return (
    <>
      <section className="image-galary">
        <div class="front">
          <img
            src={props.image}
            alt=""
            class="front-image"
          />
          
        </div>
        
      </section>
    </>
  );
};

export default CreatorImages;
