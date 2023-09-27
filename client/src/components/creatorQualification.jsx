import { Link } from "react-router-dom";

const CreatorQualification = (props) => {
  const countryTag = {
    Bangladesh: "bd",
    India: "in",
  };
  let country="";
  for (let i in countryTag) {
    if (i == props.data.country) {
      country = countryTag[i];
      break;
    }
  }

  return (
    <div class="campaign-requirements">
      <section class="qualifications">
        <h2>Qualifications</h2>
        <div class="qualification">
          <span class="label">Platforms</span>
          {props.data.platforms.map((e) => {
            return <span class="value">{e.name}</span>;
          })}
        </div>

        
        <div class="qualification">
          <span class="label">Age</span>
          <span class="value">{props.data.age}+</span>
        </div>
        {props.data.price ? (
          <div class="qualification">
            <span class="label">Price</span>
            <span class="value">{props.data.price}k+ per post</span>
          </div>
        ) : null}
        <div class="qualification">
          <span class="label">Nationality</span>
          <span class="value">
            <img
              data-testid="circle-country-flag"
              class="flag"
              title="bd"
              height="30"
              src={`https://hatscripts.github.io/circle-flags/flags/${country}.svg`}
            />
          </span>
        </div>
        <div class="opt-in">
          <div class="buttons">
            <Link to={window.location.pathname}>
              <button
                type="button"
                class="ant-btn ant-btn-secondary creators--previous-works"
                disabled=""
              >
                <span> Previous Works</span>
              </button>
            </Link>
            <button type="button" class="ant-btn ant-btn-primary">
              <a
                href={props.data.contactLink}
                target="_blank"
                className="contact-link"
              >
                <span>Contact </span>
                <span
                  role="img"
                  aria-label="double-right"
                  class="anticon anticon-double-right"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="double-right"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"></path>
                  </svg>
                </span>
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatorQualification;
