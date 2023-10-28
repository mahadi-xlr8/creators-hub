import { useState } from "react";
const PlatformLink = (props) => {
  return (
    <div className="platform-container">
      <div>
        <img
          src="/images/creators/icons/facebook.png"
          alt=""
          className="icon"
        />
        <input
          type="text"
          className="link"
          placeholder="Enter profile link"
          value={props.values[0].link}
          onChange={(e) => props.onChange(e.target.value, "Facebook")}
        />
      </div>
      <div>
        <img src="/images/creators/icons/youtube.png" alt="" className="icon" />
        <input
          type="text"
          className="link"
          placeholder="Enter channel link"
          value={props.values[1].link}
          onChange={(e) => props.onChange(e.target.value, "Youtube")}
        />
      </div>

      <div>
        <img
          src="/images/creators/icons/instagram.svg"
          alt=""
          className="icon"
        />
        <input
          type="text"
          className="link"
          placeholder="Enter profile link"
          value={props.values[2].link}
          onChange={(e) => props.onChange(e.target.value, "Instagram")}
        />
      </div>
    </div>
  );
};

export default PlatformLink;
