import React, { Component } from "react";
import NevBar from "../components/nevBar";
import Slider from "react-slick";
class Brands extends React.Component {
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
                <a href="#" class="link-btn primary">
                  Get Started
                </a>
              </div>
            </div>
          </section>

          <section class="testimonials-wrapper brand">
            <div class="background">
              <img src="../images/all/pages/brands/testimonial-bg.svg" alt="" />
            </div>
            <div class="inner">
              <div class="intro-section">
                <h2>Marketers love us</h2>
                <p class="subtitle">
                  Where brands and creators connect, collaborate, grow, & earn
                  more money
                </p>
                <div class="review-sites-wrapper">
                  <div class="review-site">
                    <img
                      class="icon"
                      src="../images/all/icons/google.svg"
                      alt="Google"
                    />
                    <div class="text">
                      <p class="number">5.0</p>
                    </div>
                  </div>
                  <div class="review-site">
                    <img
                      class="icon"
                      src="../images/all/icons/g2.svg"
                      alt="G2"
                    />
                    <div class="text">
                      <p class="number">4.6</p>
                    </div>
                  </div>
                  <div class="review-site">
                    <img
                      class="icon"
                      src="../images/all/icons/trustpilot.svg"
                      alt="TrustPilot"
                    />
                    <div class="text">
                      <p class="number">4.5</p>
                    </div>
                  </div>
                </div>
                <div class="testimonial desktop fade-in">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <img src="../images/all/pages/home/kate.jpg" alt="" />
                        </div>
                        <div class="text">
                          <p class="reviewer-name">Kate Slaney</p>
                          <p class="date">Dec 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      As a Brand Manager, Creator.co full service option with
                      influencer negotiation has made this part of my job
                      seamless and we are receiving high quality content! Highly
                      recommend working with them.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/google.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                id="brand-testimonials-slider-one"
                class="testimonials-slider"
              >
                <div class="testimonial">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <span class="initials">DD</span>
                        </div>

                        <div class="text">
                          <p class="reviewer-name">Diana Danoff</p>
                          <p class="date">Sep 27, 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      Creator.co support all four of our brands, and are doing
                      an amazing job on each one of them. I’m so happy with all
                      content the influencers are producing and the traction we
                      are getting from new customers.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/google.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="testimonial">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <span class="initials">ES</span>
                        </div>

                        <div class="text">
                          <p class="reviewer-name">Eden Spodek</p>
                          <p class="date">Oct 3, 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      The platform is easy to use, it’s helpful managing
                      creators and campaigns all in one place. The best part
                      about Creator.co is having the option to work with an
                      account rep who will take any aspects of the campaign and
                      creator engagement process for your brand.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/google.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="testimonial">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <span class="initials">KS</span>
                        </div>

                        <div class="text">
                          <p class="reviewer-name">Kate Slaney</p>
                          <p class="date">Dec 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      As a Brand Manager, Creator.co full service option with
                      influencer negotiation has made this part of my job
                      seamless and we are receiving high quality content! Highly
                      recommend working with them.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/google.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="testimonial">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <span class="initials">KC</span>
                        </div>

                        <div class="text">
                          <p class="reviewer-name">Kevin Campbell</p>
                          <p class="date">Oct 12, 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      Hands down the best Influencer platform out there!! I
                      absolutely love Creator.co. The team is fantastic and they
                      do a really good job. The influencers are wonderful as
                      well as the service.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/trustpilot.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="testimonial">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <span class="initials">JF</span>
                        </div>

                        <div class="text">
                          <p class="reviewer-name">Jessica Friedman</p>
                          <p class="date">Sep 28, 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      The team at Creator.Co is amazing! They have helped our
                      brand, Hydreight® build social proof on multiple
                      platforms, as well as created video content that went
                      viral on TikTok and Facebook.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/trustpilot.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="testimonial">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <span class="initials">SC</span>
                        </div>

                        <div class="text">
                          <p class="reviewer-name">Sandro C.</p>
                          <p class="date">Jul 19, 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      We explored multiple platforms before choosing Creator.co
                      - after 1 week of our campaign going live we had hundreds
                      of on-brand Influencers to work with at our discretion.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/g2.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="testimonial">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <span class="initials">A</span>
                        </div>

                        <div class="text">
                          <p class="reviewer-name">Anonymous</p>
                          <p class="date">Sep 12, 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      Best tool (and team!) for narrowing down your ideal
                      creator audience. Creator.co makes this easy by providing
                      a ton on filters that help narrow down so that you can
                      find exactly who you want.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/g2.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div class="desktop-testimonials">
                <div class="testimonial desktop fade-in">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <span class="initials">JF</span>
                        </div>
                        <div class="text">
                          <p class="reviewer-name">Jessica Friedman</p>
                          <p class="date">Sep 28, 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      The team at Creator.Co is amazing! They have helped our
                      brand, Hydreight® build social proof on multiple
                      platforms, as well as created video content that went
                      viral on TikTok and Facebook.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/trustpilot.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="testimonial desktop fade-in">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <span class="initials">A</span>
                        </div>
                        <div class="text">
                          <p class="reviewer-name">Anonymous</p>
                          <p class="date">Sep 12, 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="../images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      Best tool (and team!) for narrowing down your ideal
                      creator audience. Creator.co makes this easy by providing
                      a ton on filters that help narrow down so that you can
                      find exactly who you want.
                    </p>
                    <img
                      class="review-site-logo"
                      src="../images/all/icons/g2.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="logo-scroller">
            <h3>Used by hundreds of brands</h3>
            <div id="brand-partners-slider">
                <div class="logos greyscale slick-sliders">
              <Slider {...settings} className='my-sliders'>
                  <div class="item">
                    <img src=".././images/logos/partners/blanka.png" alt="" />
                  </div>
                  <div class="item">
                    <img src=".././images/logos/partners/colgate.png" alt="" />
                  </div>
                  <div class="item">
                    <img src=".././images/logos/partners/veritree.png" alt="" />
                  </div>
                  <div class="item">
                    <img src=".././images/logos/partners/walmart.png" alt="" />
                  </div>
                  <div class="item">
                    <img src=".././images/logos/partners/later.png" alt="" />
                  </div>
                  <div class="item">
                    <img src=".././images/logos/partners/think.png" alt="" />
                  </div>
                  <div class="item">
                    <img
                      src=".././images/logos/partners/hootsuite.png"
                      alt=""
                    />
                  </div>
                  <div class="item">
                    <img src=".././images/logos/partners/hex.png" alt="" />
                  </div>
                  <div class="item">
                    <img src=".././images/logos/partners/vista.png" alt="" />
                  </div>
                  <div class="item">
                    <img
                      src=".././images/logos/partners/scentuals.png"
                      alt=""
                    />
                  </div>
              </Slider>
                </div>
            </div>
          </section>

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
                  <img src="../images/all/pages/home/graphic2.png" alt="" />
                </div>
                <div class="text fade-in">
                  <h3>
                    Expert
                    <span class="thin-text">Account Managers</span>
                  </h3>
                  <p>
                    Work with an industry expert to build strategy, recruit
                    creators, and report back on KPIs so you can focus on the
                    bigger picture
                  </p>
                </div>
              </div>
              <div class="asset-group">
                <div class="image">
                  <img src="../images/all/pages/home/graphic3.png" alt="" />
                </div>
                <div class="text fade-in">
                  <h3>
                    Largest Community
                    <span class="thin-text">of Aspiring Influencers</span>
                  </h3>
                  <p>
                    Once your campaign is live, over 175k creators and
                    influencers in our network are able to apply. Save time
                    recruiting while you connect with authentic influencers who
                    are genuinely excited about your brand
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="getting-started">
            <div class="inner">
              <h2>Getting Started Is Easy</h2>
              <div class="steps fade-in-group">
                <div class="step fade-in">
                  <img src="../images/all/pages/home/graphic1.png" alt="" />
                  <p>Build a campaign brief</p>
                </div>
                <img
                  class="arrow fade-in"
                  src="../images/all/pages/brands/step-arrow-1.svg"
                  alt=""
                />
                <div class="step fade-in">
                  <img src="../images/all/pages/home/graphic2.png" alt="" />
                  <p>Creators apply</p>
                </div>
                <img
                  class="arrow fade-in"
                  src="../images/all/pages/brands/step-arrow-2.svg"
                  alt=""
                />
                <div class="step fade-in">
                  <img src="../images/all/pages/home/graphic3.png" alt="" />
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
                    <p>UGC Campaigns</p>
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
        <footer class="main-footer">
          <div class="inner">
            <div class="logo-wrapper">
              <a href="index.html" class="logo">
                Influences Hub
              </a>
              <div class="copyright">
                &copy; 2023 Mahadi All rights reserved.
              </div>
            </div>

            <div class="links">
              <div class="group">
                <h4>Brands</h4>
                <a href="brands">Home</a>
                <a href="#">Pricing</a>
                <a href="brand-terms">Terms & Conditions</a>
                <a href="brand-contact">Contact Us</a>
                <a href="brand-faq">FAQ</a>
              </div>
              <div class="group">
                <h4>Creators</h4>
                <a href="creators">Home</a>
                <a href="creator-privacy">Privacy Policy</a>
                <a href="creator-terms">Terms & Conditions</a>
                <a href="creator-contact">Contact Us</a>
                <a href="creator-faq">FAQ</a>
              </div>
            </div>

            <div>
              <div class="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    class="icon"
                    src="../images/all/icons/social/facebook-circle.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    class="icon"
                    src="../images/all/icons/social/instagram-circle.svg"
                    alt="Instagram"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    class="icon"
                    src="../images/all/icons/social/youtube-circle.svg"
                    alt="YouTube"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    class="icon"
                    src="../images/all/icons/social/twitter-circle.svg"
                    alt="Twitter"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    class="icon"
                    src="../images/all/icons/social/tiktok-circle.svg"
                    alt="TikTok"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Brands;
