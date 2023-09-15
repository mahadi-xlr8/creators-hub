import { Link } from "react-router-dom";
const PostCard = (props) => {
  return (
    <div class="CampaignCard__Wrapper-sc-1twbu8n-0 bbKwX">
      <div class="fade-in" style={{ opacity: 1 }}>
        <Link class="campaign-card-inner" to={"/post/"+1}>
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
                  <span class="label">Engagement</span>
                  <span class="value">{80}%+</span>
                </div>
                <div class="requirement">
                  <span class="label">Audience Age</span>
                  <span class="value">
                    {10} to {20}
                  </span>
                </div>
                <div class="requirement">
                  <span class="label">Residence</span>
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
                  <span class="niche null">{500}k BDT per post</span>
                </div>
              </div>
              <div class="objectives">
                <a
                  class="strategy"
                  href={"#"}
                  style={{ color: "black" }}
                >
                  <img class="icon" src="#" alt="" />
                  <p>{"Facebook"}</p>
                  <span class="format">Video (1)</span>
                </a>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
