import React, { Component } from "react";
import Slider from "react-slick";
import NevBar from "../components/nevBar";
import Footer from "./footer";
import PartnerSlider from "../components/slider/partner";
class Home extends React.Component {
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
    const creatorSlider = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <>
        <NevBar userType='' login={true} name={"Mehazabien"}/>

      {/* <NavBarLogin/> */}

        <div id="crco-sidebar-overlay"></div>
        <main class="home-wrapper">
          <section class="hero-banner">
            <div
              class="background"
              style={{
                backgroundImage: "url(images/hero-images/background.svg)",
              }}
            ></div>
            <div class="inner">
              <div class="image-group mobile-visible">
                <div class="image-wrapper mobile-visible top-left">
                  <img src="images/hero-images/graphic1.png" alt="" />
                </div>
                <div class="image-wrapper bottom-left">
                  <img src="images/hero-images/graphic2.png" alt="" />
                </div>
              </div>

              <div class="text-group">
                <h1>
                  Where brands and creators connect, collaborate, grow, & earn
                  more money
                </h1>
                <div class="button-group">
                  <a href="brands" class="link-btn primary">
                    I'm a brand
                  </a>
                  <a href="creators" class="link-btn secondary">
                    I'm a creator
                  </a>
                </div>
                <p>One tree planted for every collaboration.</p>
              </div>

              <div class="image-group">
                <div class="image-wrapper top-right">
                  <img src="images/hero-images/graphic3.png" alt="" />
                </div>
                <div class="image-wrapper bottom-right">
                  <img src="images/hero-images/graphic4.png" alt="" />
                </div>
              </div>
            </div>
          </section>

          <section class="logo-scroller">
            <h3>Brands & Partners</h3>
            <div id="brand-partners-slider">
              <div class="logos greyscale slick-sliders">
                <PartnerSlider settings={settings}/>
              </div>
            </div>
          </section>
          <section class="testimonials-wrapper brand">
            <div class="background">
              <img src="./images/hero-images/brand-testimonial-bg.svg" alt="" />
            </div>
            <div class="inner">
              <div class="intro-section">
                <h2>Brands love us</h2>
                <p class="subtitle">
                  The leading Influencer marketing platform for challenger
                  brands and micro influencers
                </p>
                <div class="review-sites-wrapper">
                  <div class="review-site">
                    <img
                      class="icon"
                      src="./images/all/icons/google.svg"
                      alt="Google"
                    />
                    <div class="text">
                      <p class="number">5.0</p>
                    </div>
                  </div>
                  <div class="review-site">
                    <img
                      class="icon"
                      src="./images/all/icons/g2.svg"
                      alt="G2"
                    />
                    <div class="text">
                      <p class="number">4.6</p>
                    </div>
                  </div>
                  <div class="review-site">
                    <img
                      class="icon"
                      src="./images/all/icons/trustpilot.svg"
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
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci in esse cupiditate eveniet tempora asperiores.
                      Molestiae ipsa, tenetur, enim impedit perspiciatis
                      consectetur, recusandae excepturi necessitatibus culpa
                      exercitationem soluta omnis quas voluptas quod unde
                      blanditiis. Voluptatem nulla, perspiciatis delectus
                      voluptatibus tempore quos unde excepturi rem provident
                      iure deserunt est, dolorum minus!
                    </p>
                    <img
                      class="review-site-logo"
                      src="./images/all/icons/trustpilot.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                id="brand-testimonials-slider-one"
                class="testimonials-slider"
              >
                <Slider {...creatorSlider}>
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
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <p class="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident, sit voluptas? Obcaecati soluta, vero
                        accusantium beatae numquam ipsam maxime, inventore quo
                        pariatur consequuntur deserunt. Dolores consectetur est
                        voluptas quia eaque?
                      </p>
                      <img
                        class="review-site-logo"
                        src="./images/all/icons/google.svg"
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
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <p class="message">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo a praesentium magnam aliquam aspernatur!
                        Architecto enim accusamus veniam illo culpa, dolorem
                        nostrum quia alias vitae. Sapiente, quam pariatur
                        inventore, facere qui tempora voluptatem deserunt itaque
                        hic eveniet labore repudiandae nostrum?
                      </p>
                      <img
                        class="review-site-logo"
                        src="./images/all/icons/google.svg"
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
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <p class="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi corporis qui harum voluptatem fugiat magnam ratione
                        officia quibusdam officiis nam aperiam cupiditate
                        reiciendis, repellendus ullam ea, at impedit, natus
                        repudiandae.
                      </p>
                      <img
                        class="review-site-logo"
                        src="./images/all/icons/google.svg"
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
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <p class="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae voluptates amet temporibus similique cumque
                        doloribus atque. Aliquam at consequuntur eveniet harum
                        perferendis, voluptatem, alias iure reiciendis eaque
                        officia quae veritatis?
                      </p>
                      <img
                        class="review-site-logo"
                        src="./images/all/icons/trustpilot.svg"
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
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <p class="message">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Reiciendis iure cupiditate recusandae nulla
                        voluptatem doloribus ex odio ea fugiat dolorum accusamus
                        reprehenderit, praesentium id. Expedita error deleniti
                        minus veritatis eveniet?
                      </p>
                      <img
                        class="review-site-logo"
                        src="./images/all/icons/trustpilot.svg"
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
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <p class="message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Soluta, nemo est? Dolore rerum libero
                        exercitationem voluptatum minus aliquid alias voluptate,
                        non sunt quae nesciunt autem mollitia qui placeat iste
                        soluta.
                      </p>
                      <img
                        class="review-site-logo"
                        src="./images/all/icons/g2.svg"
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
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                          <img
                            class="icon"
                            src="./images/all/icons/star.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <p class="message">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Maxime, totam repellendus facilis velit rerum
                        laboriosam, perspiciatis accusantium quia sed ipsam
                        consectetur quae eligendi, recusandae similique earum
                        quod nisi eius? Iste.
                      </p>
                      <img
                        class="review-site-logo"
                        src="./images/all/icons/g2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </Slider>
              </div>

              <div class="desktop-testimonials">
                <div class="testimonial desktop fade-in">
                  <div class="testimonial-inner">
                    <div class="upper">
                      <div class="reviewer-info">
                        <div class="avatar">
                          <img src="./images/all/pages/home/diana.jpg" alt="" />
                        </div>
                        <div class="text">
                          <p class="reviewer-name">Diana Danoff</p>
                          <p class="date">Sep 27, 2022</p>
                        </div>
                      </div>
                      <div class="stars">
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore, natus libero doloremque eum in neque debitis
                      magni nisi ex obcaecati possimus quidem ducimus, placeat
                      atque accusamus eligendi harum aperiam corrupti.
                    </p>
                    <img
                      class="review-site-logo"
                      src="./images/all/icons/google.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="testimonial desktop fade-in">
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
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                        <img
                          class="icon"
                          src="./images/all/icons/star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p class="message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat non obcaecati animi dolorem laudantium! Nulla
                      tempora natus sit excepturi reprehenderit quis, dolorem
                      cumque sint perferendis provident earum voluptate,
                      mollitia aliquam.
                    </p>
                    <img
                      class="review-site-logo"
                      src="./images/all/icons/g2.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="testimonials-wrapper creator">
            <div class="background">
              <img
                src="./images/all/pages/home/creator-testimonial-bg.svg"
                alt=""
              />
            </div>
            <div class="inner">
              <h2>Creators love us</h2>
              <div id="creator-testimonials-slider" class="testimonials-slider">
                <Slider {...creatorSlider} className="creator-slider">
                  <div class="testimonial">
                    <div class="testimonial-inner">
                      <img
                        class="creator-pic"
                        src="./images/all/pages/creators/kendra.jpg"
                      />
                      <a
                        target="_blank"
                        rel="noopenner noreferrer"
                        href="https://www.instagram.com/kenbunny"
                        class="creator-name"
                      >
                        @kenbunny
                      </a>
                      <p class="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla, hic voluptatem expedita magnam, architecto
                        numquam consectetur quasi veniam ex dicta illo itaque in
                        consequatur error totam explicabo! Officia, rem
                        temporibus!
                      </p>
                    </div>
                  </div>
                  <div class="testimonial">
                    <div class="testimonial-inner">
                      <img
                        class="creator-pic"
                        src="./images/all/pages/creators/angel.jpg"
                      />
                      <a
                        target="_blank"
                        rel="noopenner noreferrer"
                        href="https://www.instagram.com/honeysdiary"
                        class="creator-name"
                      >
                        @honeysdiary
                      </a>
                      <p class="message">
                        “Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Autem, officia accusamus in delectus, adipisci et
                        pariatur ad sint dolorum error quas perferendis nesciunt
                        quaerat, beatae similique magni laudantium
                        reprehenderit. Repudiandae.”
                      </p>
                    </div>
                  </div>
                  <div class="testimonial">
                    <div class="testimonial-inner">
                      <img
                        class="creator-pic"
                        src="./images/all/pages/creators/jetty.jpg"
                      />
                      <a
                        target="_blank"
                        rel="noopenner noreferrer"
                        href="https://www.instagram.com/trujetty"
                        class="creator-name"
                      >
                        @trujetty
                      </a>
                      <p class="message">
                        “Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iusto consequuntur aliquid architecto? Iste
                        officia placeat exercitationem ratione quas
                        necessitatibus nostrum repudiandae sunt, dolores quae,
                        labore, minus ipsam dignissimos mollitia commodi.”
                      </p>
                    </div>
                  </div>
                  <div class="testimonial">
                    <div class="testimonial-inner">
                      <img
                        class="creator-pic"
                        src="./images/all/pages/creators/tiffany.jpg"
                      />
                      <a
                        target="_blank"
                        rel="noopenner noreferrer"
                        href="https://www.instagram.com/teaneill"
                        class="creator-name"
                      >
                        @teaneill
                      </a>
                      <p class="message">
                        “Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iusto consequuntur aliquid architecto? Iste
                        officia placeat exercitationem ratione quas
                        necessitatibus nostrum repudiandae sunt, dolores quae,
                        labore, minus ipsam dignissimos mollitia commodi.”
                      </p>
                    </div>
                  </div>
                  <div class="testimonial">
                    <div class="testimonial-inner">
                      <img
                        class="creator-pic"
                        src="./images/all/pages/creators/frankie.jpg"
                      />
                      <a
                        target="_blank"
                        rel="noopenner noreferrer"
                        href="https://www.instagram.com/frankiecena"
                        class="creator-name"
                      >
                        @frankiecena
                      </a>
                      <p class="message">
                        “Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iusto consequuntur aliquid architecto? Iste
                        officia placeat exercitationem ratione quas
                        necessitatibus nostrum repudiandae sunt, dolores quae,
                        labore, minus ipsam dignissimos mollitia commodi.”
                      </p>
                    </div>
                  </div>
                  <div class="testimonial">
                    <div class="testimonial-inner">
                      <img
                        class="creator-pic"
                        src="./images/all/pages/creators/jenna.jpg"
                      />
                      <a
                        target="_blank"
                        rel="noopenner noreferrer"
                        href="https://www.instagram.com/thejennaricciardi"
                        class="creator-name"
                      >
                        @thejennaricciardi
                      </a>
                      <p class="message">
                        “Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iusto consequuntur aliquid architecto? Iste
                        officia placeat exercitationem ratione quas
                        necessitatibus nostrum repudiandae sunt, dolores quae,
                        labore, minus ipsam dignissimos mollitia commodi.”
                      </p>
                    </div>
                  </div>
                  <div class="testimonial">
                    <div class="testimonial-inner">
                      <img
                        class="creator-pic"
                        src="./images/all/pages/creators/arwen.jpg"
                      />
                      <a
                        target="_blank"
                        rel="noopenner noreferrer"
                        href="https://www.instagram.com/arwenrising"
                        class="creator-name"
                      >
                        @arwenrising
                      </a>
                      <p class="message">
                        “Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iusto consequuntur aliquid architecto? Iste
                        officia placeat exercitationem ratione quas
                        necessitatibus nostrum repudiandae sunt, dolores quae,
                        labore, minus ipsam dignissimos mollitia commodi.”
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>

          <section class="learn-more fade-in">
            <div class="background">
              <img src="./images/all/pages/home/curve-bg.svg" alt="" />
            </div>
            <img
              class="hashtag"
              src="./images/all/pages/home/hashtag.svg"
              alt=""
            />
            <div class="inner">
              <h2>Learn More</h2>
              <div class="button-group-wrapper">
                <img
                  class="arrow"
                  src="./images/all/pages/home/squiggle-arrow.svg"
                  alt=""
                />
                <div class="button-group">
                  <a href="brands" class="link-btn primary">
                    I'm a brand
                  </a>
                  <a href="creators" class="link-btn secondary">
                    I'm a creator
                  </a>
                </div>
              </div>
            </div>
          </section>

          
        </main>
        <Footer/>
        
      </>
    );
  }
}

export default Home;
