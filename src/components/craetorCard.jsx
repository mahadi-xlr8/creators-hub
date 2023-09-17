import { Link } from "react-router-dom";

const CreatorCard = (props) => {
  let linkName = "";

  for (let i of props.name) {
    if (i === " ") linkName += '-';
    else linkName += i;
  }
  return (
    <div class="CampaignCard__Wrapper-sc-1twbu8n-0 bbKwX">
      <div class="fade-in" style={{ opacity: 1 }}>
        <Link class="campaign-card-inner" to={"/creator/"+props.name}>
          <div class="basic-info">
            <p class="brand">{props.name}</p>
            <p class="title">{props.title}</p>
          </div>
          <div class="details">
            <div class="product">
              <div class="thumbnail">
                <div class="ImageLoader__Wrapper-sc-1fuj46z-0 igigqf">
                  <img
                    src={props.profileImg}
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
                  <span class="value">{props.followers}+</span>
                </div>
                <div class="requirement">
                  <span class="label">Engagement</span>
                  <span class="value">{props.engagement}%+</span>
                </div>
                <div class="requirement">
                  <span class="label">Audience Age</span>
                  <span class="value">
                    {props.audience.low} to {props.audience.high}
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
                  <span class="niche null">{props.price}k BDT per post</span>
                </div>
              </div>
              <div class="objectives">
                <a
                  class="strategy"
                  href={props.promoVideo.videoLink}
                  style={{ color: "black" }}
                >
                  <img class="icon" src={props.promoVideo.iconSrc} alt="" />
                  <p>{props.promoVideo.platformName}</p>
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

export default CreatorCard;
