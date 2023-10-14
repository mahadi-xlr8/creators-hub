import { useEffect, useState } from "react";
import { loginInfo } from "../../globalState";
import { useAtom } from "jotai";

const Requirments = ({ data,brandId,onDelete }) => {
  const [user] = useAtom(loginInfo);
  const countryTag = {
    Bangladesh: "bd",
    India: "in",
  };
  let country = "";
  for (let i in countryTag) {
    if (i == data.country) {
      country = countryTag[i];
      break;
    }
  }

  return (
    <div class="campaign-requirements">
      <section class="qualifications">
        <h2 className="title">Job Details</h2>
        <div class="qualification">
          <span class="label">Platform</span>
          <span class="value">{data.platform}</span>
        </div>
        <div class="qualification">
          <span class="label">Content</span>
          <span class="value">{data.content}</span>
        </div>
        {data.followers ? (
          <div class="qualification">
            <span class="label">Followers</span>
            <span class="value">{data.followers}</span>
          </div>
        ) : undefined}
        <div class="qualification">
          <span class="label">Gender</span>
          <span class="value">{data.gender}</span>
        </div>
        {data.age ? (
          <div class="qualification">
            <span class="label">Age</span>
            <span class="value">{data.age}+</span>
          </div>
        ) : undefined}
        <div class="qualification">
          <span class="label">Offer</span>
          <span class="value">{data.benefit}</span>
        </div>

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
            {user.id === brandId ? (
              <button
                type="button"
                class="ant-btn ant-btn-secondary creators--previous-works"
                disabled=""
                onClick={onDelete}
              >
                <span>Delete Job</span>
              </button>
            ) : (
              <button
                type="button"
                className={
                  "ant-btn ant-btn-secondary creators--previous-works " +
                  (data.intarested ? "im-intarested" : "")
                }
                disabled=""
              >
                <span> Intarested</span>
              </button>
            )}

            <button
              type="button"
              class="ant-btn ant-btn-primary brand-contact-link"
              onClick={()=>{
                window.location.assign(data.contact)
              }}
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
                  className="the-arrow"
                  aria-hidden="true"
                >
                  <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Requirments;
