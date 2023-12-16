import React from "react";
import NevBar from "../components/nevBar";
import PartnerSlider from "../components/home-component/partnerSlider";
import Testimonial from "../components/home-component/testimonials";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Footer from "./footer";

class Brands extends React.Component {
  state = {};
  constructor() {
    super();

    axios
      .get("/review?role=brand")
      .then((res) => {
        const data = res.data;
        const newData = data.map((e) => {
          return {
            class: "testimonial",
            desktop: "testimonial desktop fade-in",
            name: e.name,
            joined: e.date,
            message: e.message,
            img: e.img,
            stars: e.rating,
          };
        });
        this.setState({ brandTestimonial: newData });
      })
      .catch((err) => console.log(err.message));
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

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
        <NevBar userType="Brands" />
        <div id="crco-sidebar-overlay"></div>
        <main class="page-wrapper brands">
          <section class="hero-banner">
            <img
              class="background"
              src="../images/all/pages/brands/hero-bg.svg"
              alt=""
            />
            <div class="inner">
              <div class="text-group">
                <h1>
                  Drive
                  <span
                    class="typewrite blue-text"
                    data-type='[ "collaborations", "content", "awareness", "trust", "traffic", "sales", "community", "customers" ]'
                  >
                    customers<span class="wrap"></span>
                  </span>
                  <br />
                  with Creators & Influencers
                </h1>
                <p class="subtitle">
                  The all-in-one platform to scale influencer and affiliate
                  marketing campaigns.
                </p>
                <a href="/brand/signup" class="link-btn primary">
                  Get Started
                </a>
              </div>
            </div>
          </section>

          {this.state.brandTestimonial && (
            <Testimonial
              background={"../images/all/pages/brands/testimonial-bg.svg"}
              heading={"Marketers love us"}
              text={
                "Where brands and creators connect, collaborate, grow, & earn more money"
              }
              data={this.state.brandTestimonial}
            />
          )}
          <PartnerSlider
            text={"Used by hundreds of brands"}
            imgUrl={brandImgUrl}
          />

          <section class="sign-up-banner fade-in">
            <div class="background">
              <img src="../images/all/pages/home/curve-bg.svg" alt="" />
            </div>
            <img
              class="hashtag"
              src="../images/all/pages/home/hashtag.svg"
              alt=""
            />
            <div class="inner">
              <h2>Sign up to explore and access demos</h2>
              <div class="button-group-wrapper">
                <img
                  class="arrow"
                  src="../images/all/pages/home/squiggle-arrow.svg"
                  alt=""
                />
                <div class="button-group">
                  <a href="#" class="link-btn primary">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section class="brand-features">
            <div class="background">
              <img src="../images/all/pages/brands/features-bg-1.svg" alt="" />
            </div>
            <div class="inner">
              <div class="header-text">
                <img
                  class="blob"
                  src="../images/all/pages/brands/header-blob.svg"
                  alt=""
                />
                <h2>
                  Why Brands Choose <span class="blue-text">Us</span>
                </h2>
              </div>
            </div>
          </section>

          <section class="brand-features">
            <div class="background">
              <img src="../images/all/pages/brands/features-bg-2.svg" alt="" />
            </div>
            <div class="inner">
              <div class="asset-group">
                <div class="image">
                  <Fade left>
                    <img src="../images/all/pages/home/graphic2.png" alt="" />
                  </Fade>
                </div>
                <div class="text fade-in">
                  <Fade right>
                    <h3>
                      Expert
                      <span class="thin-text">Account Managers</span>
                    </h3>
                    <p>
                      Work with an industry expert to build strategy, recruit
                      creators, and report back on KPIs so you can focus on the
                      bigger picture
                    </p>
                  </Fade>
                </div>
              </div>
              <div class="asset-group">
                <div class="image">
                  <Fade right>
                    <img src="../images/all/pages/home/graphic3.png" alt="" />
                  </Fade>
                </div>
                <div class="text fade-in">
                  <Fade left>
                    <h3>
                      Largest Community
                      <span class="thin-text">of Aspiring Influencers</span>
                    </h3>
                    <p>
                      Once your campaign is live, over 175k creators and
                      influencers in our network are able to apply. Save time
                      recruiting while you connect with authentic influencers
                      who are genuinely excited about your brand
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </section>

          <section class="getting-started">
            <div class="inner">
              <h2>Getting Started Is Easy</h2>
              <div class="steps fade-in-group">
                <div class="step fade-in">
                  <Fade top>
                    <img src="../images/all/pages/home/graphic1.png" alt="" />
                  </Fade>
                  <p>Build a campaign brief</p>
                </div>
                <img
                  class="arrow fade-in"
                  src="../images/all/pages/brands/step-arrow-1.svg"
                  alt=""
                />
                <div class="step fade-in">
                  <Fade top>
                    <img src="../images/all/pages/home/graphic2.png" alt="" />
                  </Fade>
                  <p>Creators apply</p>
                </div>
                <img
                  class="arrow fade-in"
                  src="../images/all/pages/brands/step-arrow-2.svg"
                  alt=""
                />
                <div class="step fade-in">
                  <Fade top>
                    <img src="../images/all/pages/home/graphic3.png" alt="" />
                  </Fade>
                  <p>Activate the ones you want</p>
                </div>
              </div>
            </div>
          </section>

          <section class="campaign-types">
            <div class="background">
              <img
                src="../images/all/pages/brands/campaign-types-bg.svg"
                alt=""
              />
            </div>
            <div class="inner">
              <h2>
                Work with influencers
                <br />
                today to grow your brand
              </h2>
              <div class="types">
                <div class="row">
                  <div class="type">
                    <div class="gallery-img-wrapper ugc">
                      <div class="fade-cycle">
                        <img
                          class="gallery-img"
                          src="../images/all/pages/home/graphic1.png"
                          alt=""
                        />
                        <img
                          class="gallery-img"
                          src="../images/all/pages/home/graphic2.png"
                          alt=""
                        />
                        <img
                          class="gallery-img"
                          src="../images/all/pages/home/graphic3.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <p style={{ margin:'3rem' }}>UGC Campaigns</p>
                  </div>
                  <div class="type">
                    <div class="gallery-img-wrapper p4p ">
                      <img
                        class="frame"
                        src="../images/all/pages/brands/content-gallery/gallery2-frame.svg"
                        alt=""
                      />
                      <div class="fade-cycle fade-image-brand">
                        <img
                          class="gallery-img"
                          src="../images/all/pages/brands/content-gallery/gallery2-img1.jpg"
                          alt=""
                        />
                        <img
                          class="gallery-img"
                          src="../images/all/pages/brands/content-gallery/gallery2-img2.jpg"
                          alt=""
                        />
                        <img
                          class="gallery-img"
                          src="../images/all/pages/brands/content-gallery/gallery2-img3.jpg"
                          alt=""
                        />
                      </div>
                      <img
                        class="overlay"
                        src="../images/all/pages/brands/content-gallery/gallery2-overlay.svg"
                        alt=""
                      />
                      <img
                        class="shape"
                        src="../images/all/pages/brands/content-gallery/gallery2-shape.svg"
                        alt=""
                      />
                    </div>
                    <p>Product for Post</p>
                  </div>
                </div>
                <div class="row">
                  <div class="type">
                    <div class="gallery-img-wrapper contests">
                      <img
                        class="shape"
                        src="../images/all/pages/brands/content-gallery/gallery3-shape.svg"
                        alt=""
                      />
                      <div class="fade-cycle">
                        <img
                          class="gallery-img"
                          src="../images/all/pages/brands/content-gallery/gallery3-img1.jpg"
                          alt=""
                        />
                        <img
                          class="gallery-img"
                          src="../images/all/pages/brands/content-gallery/gallery3-img2.jpg"
                          alt=""
                        />
                        <img
                          class="gallery-img"
                          src="../images/all/pages/brands/content-gallery/gallery3-img3.jpg"
                          alt=""
                        />
                      </div>
                      <img
                        class="frame"
                        src="../images/all/pages/brands/content-gallery/gallery3-frame.svg"
                        alt=""
                      />
                    </div>
                    <p>Contests & Giveaways</p>
                  </div>
                  <div class="type">
                    <div class="gallery-img-wrapper experiences">
                      <img
                        class="frame"
                        src="../images/all/pages/brands/content-gallery/gallery4-frame.svg"
                        alt=""
                      />
                      <div class="fade-cycle">
                        <img
                          class="gallery-img"
                          src="../images/all/pages/brands/content-gallery/gallery4-img1.jpg"
                          alt=""
                        />
                        <img
                          class="gallery-img"
                          src="../images/all/pages/brands/content-gallery/gallery4-img2.jpg"
                          alt=""
                        />
                        <img
                          class="gallery-img"
                          src="../images/all/pages/brands/content-gallery/gallery4-img3.jpg"
                          alt=""
                        />
                      </div>
                      <img
                        class="arrow"
                        src="../images/all/pages/brands/content-gallery/gallery4-shape1.svg"
                        alt=""
                      />
                    </div>
                    <p>In-Store Experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Brands;
