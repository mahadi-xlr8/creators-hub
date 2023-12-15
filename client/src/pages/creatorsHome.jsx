import NevBar from "../components/nevBar";
import CreatorHeroSection from "../components/creator-component/heroSection";
import PartnerSlider from "../components/home-component/partnerSlider";
import CreatorPageTestimonial from "../components/creator-component/creatorTestimonial";
import Footer from "./footer";
import { useState, useEffect } from "react";
import axios from "axios";
const CreatorsHome = (props) => {
  const [creatorTestimonial, setCreatorTestimonial] = useState([]);
  useEffect(() => {
    axios
      .get("/review?role=creator")
      .then((res) => {
        const data = res.data;
        const newData = data.map((e) => {
          return {
            name: e.name,
            message: e.message,
            imgUrl: e.img,
            profileLink: e.profile,
          };
        });
        setCreatorTestimonial(newData);
      })
      .catch((err) => console.log(err.message));
  }, []);
  const brandImgUrl = [
    "./images/logos/partners/blanka.png",
    "./images/logos/partners/colgate.png",
    "./images/logos/partners/veritree.png",
    "./images/logos/partners/walmart.png",
    "./images/logos/partners/later.png",
    "./images/logos/partners/think.png",
    "./images/logos/partners/hootsuite.png",
    "./images/logos/partners/hex.png",
    "./images/logos/partners/vista.png",
    "./images/logos/partners/scentuals.png",
  ];
  return (
    <>
      <NevBar userType={"Creator"} />
      <main class="page-wrapper creators">
        <CreatorHeroSection />

        {/* TODO: partner slider here */}
        <PartnerSlider text={"Brands & Partners"} imgUrl={brandImgUrl} />

        <section class="creator-features">
          <div class="background">
            <img
              src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/features-bg.svg"
              alt=""
            />
          </div>
          <div class="inner">
            <div class="header-text">
              <img
                class="blob"
                src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/header-blob.svg"
                alt=""
              />
              <h2>
                Why join the
                <br />
                Creator Community?
              </h2>
            </div>
            <div class="feature-cards fade-in-group">
              <div class="feature-card fade-in">
                <img
                  class="icon"
                  src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/connect.svg"
                  alt=""
                />
                <h3>Connect</h3>
                <p>
                  Join like minded creators and industry experts who want to
                  help you get noticed and paid for creating stunning content
                </p>
              </div>
              <div class="feature-card fade-in">
                <img
                  class="icon"
                  src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/collaborate.svg"
                  alt=""
                />
                <h3>Collaborate</h3>
                <p>
                  Find hundreds of influencer campaigns and affiliate programs
                  from challenger brands and market leaders who want to work
                  with you
                </p>
              </div>
              <div class="feature-card fade-in">
                <img
                  class="icon"
                  src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/grow.svg"
                  alt=""
                />
                <h3>Grow</h3>
                <p>
                  Access exclusive influencer events, and discounts on leading
                  creator economy platforms to help you grow your personal brand
                </p>
              </div>
              <div class="feature-card fade-in">
                <img
                  class="icon"
                  src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/earn.svg"
                  alt=""
                />
                <h3>Earn More</h3>
                <p>
                  Get paid by brands while earning influence tokens that you can
                  redeem for more cool stuff
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="start-collaborating">
          <div class="background">
            <img
              src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/home/curve-bg.svg"
              alt=""
            />
          </div>
          <img
            class="hashtag"
            src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/home/hashtag.svg"
            alt=""
          />
          <div class="inner">
            <h2>
              Start collaborating
              <br />
              with amazing brands
            </h2>
            <div class="button-group-wrapper">
              <img
                class="arrow"
                src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/home/squiggle-arrow.svg"
                alt=""
              />
              <div class="button-group">
                <a
                  href="https://app.creator.co/signup"
                  class="link-btn primary"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="testimonials-wrapper creator">
          <div class="background">
            <img
              src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/testimonials-bg.svg"
              alt=""
            />
          </div>
          <div class="inner">
            <h2>
              Over <span class="blue-text">175,000</span>
              <br />
              Happy Creators
              <br />
              &amp; Counting
            </h2>
            {creatorTestimonial.length > 0 && (
              <CreatorPageTestimonial data={creatorTestimonial} />
            )}
            {/* TODO: creator slider here */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CreatorsHome;
