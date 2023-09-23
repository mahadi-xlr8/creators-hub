import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
const PostCard = (props) => {
  const [intarested, setintarested] = useState(false);
  function handleIntarested() {
    if (!intarested) {
      toast.success("Notification sended to the brand!", { duration: 2000 });
    } else {
      toast("Removed from intarested!", {
        icon: "❌",
        duration: 2000,
      });
    }
    setintarested(!intarested);
  }
  return (
    <div class="CampaignCard__Wrapper-sc-1twbu8n-0 bbKwX">
      <div class="fade-in" style={{ opacity: 1 }}>
        <div class="campaign-card-inner">
          <Link to={"/brand/post/" + 1}>
            <div class="basic-info">
              {/* name and title */}
              <p class="brand">{"Colgate"}</p>
              <p class="title">{"Title"}</p>
            </div>
            <div class="details">
              <div class="product">
                <div class="thumbnail">
                  <div class="ImageLoader__Wrapper-sc-1fuj46z-0 igigqf">
                    <img
                      src={"/images/creators/mehazabien/img1.jpg"}
                      alt=""
                      class="smooth-image visible"
                    />
                  </div>
                </div>
              </div>
              <div class="requirements">
                <div class="qualifications">
                  <div class="requirement">
                    <span class="label">Followers</span>
                    <span class="value">{"500k"}+</span>
                  </div>

                  <div class="requirement">
                    <span class="label">Age</span>
                    <span class="value">
                      {10} to {20}
                    </span>
                  </div>
                  <div class="requirement">
                    <span class="label">Country</span>
                    <span class="value">
                      <img
                        data-testid="circle-country-flag"
                        class="flag"
                        title="bd"
                        height="100"
                        src="https://hatscripts.github.io/circle-flags/flags/bd.svg"
                      />
                    </span>
                  </div>
                  <div class="requirement">
                    <span class="niche null">{500}k BDT budget</span>
                  </div>
                </div>
                <div class="objectives">
                  <a class="strategy" href={"#"} style={{ color: "black" }}>
                    <img class="icon" src="#" alt="" />
                    <p>{"Facebook"}</p>
                    <span class="format">Video (1)</span>
                  </a>
                </div>
              </div>
            </div>
          </Link>
          <div
            className={"btn-intarested" + (intarested ? " clicked" : "")}
            onClick={handleIntarested}
          >
            Intarested
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
