import { Link } from "react-router-dom";
// TODO: this page has some small works.
const CreatorCard = ({creator}) => {
  const countryTag = {
    Bangladesh: "bd",
    India: "in",
  };
  let country="";
  for (let i in countryTag) {
    if (i == creator.country) {
      country = countryTag[i];
      break;
    }
  }

  return (
    <div class="CampaignCard__Wrapper-sc-1twbu8n-0 bbKwX">
      <div class="fade-in" style={{ opacity: 1 }}>
        <Link class="campaign-card-inner" to={"/creator/"+creator._id}>
          <div class="basic-info">
            <p class="brand">{creator.name}</p>
            {creator.title?<p class="title">{creator.title}</p>:""}
          </div>
          <div class="details">
            <div class="product">
              <div class="thumbnail">
                <div class="ImageLoader__Wrapper-sc-1fuj46z-0 igigqf">
                  <img
                    src={creator.profileImg}
                    alt=""
                    class="smooth-image visible"
                  />
                </div>
              </div>
            </div>
            <div class="requirements">
              <div class="qualifications">
                {creator.age?<div class="requirement">
                  <span class="label">Age</span>
                  <span class="value">
                    {creator.age}
                  </span>
                </div>:""}
                {country!=""?<div class="requirement">
                  <span class="label">Residence</span>
                  <span class="value">
                    <img
                      data-testid="circle-country-flag"
                      class="flag"
                      title="bd"
                      height="100"
                      src={`https://hatscripts.github.io/circle-flags/flags/${country}.svg`}
                    />
                  </span>
                </div>:""}
                <div class="requirement">
                  <span class="niche null">10k BDT per post</span>
                </div>
              </div>
              {/* <div class="objectives">
                <a
                  class="strategy"
                  href={props.promoVideo.videoLink}
                  style={{ color: "black" }}
                >
                  <img class="icon" src={props.promoVideo.iconSrc} alt="" />
                  <p>{props.promoVideo.platformName}</p>
                  <span class="format">Video (1)</span>
                </a>
              </div> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CreatorCard;
