import React, { Component } from "react";
import Slider from "react-slick";
import NevBar from "../components/nevBar";
import Footer from "./footer";
import PartnerSlider from "../components/slider/partner";
import Testimonial from "../components/home-component/testimonials";
import HomeBanner from "../components/home-component/heroBanner";
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
    const brandPath = "./images/logos/partners/";
    const brandImg = [
      "blanka.png",
      "colgate.png",
      "veritree.png",
      "walmart.png",
      "later.png",
      "think.png",
      "hootsuite.png",
      "hex.png",
      "vista.png",
      "scentuals.png",
    ];

    return (
      <>
        <NevBar userType="" login={true} name={"Mehazabien"} />

        {/* <NavBarLogin/> */}

        <div id="crco-sidebar-overlay"></div>
        <main class="home-wrapper">
          <HomeBanner/>

          <section class="logo-scroller">
            <h3>Brands & Partners</h3>
            <div id="brand-partners-slider">
              <div class="logos greyscale slick-sliders">
                <PartnerSlider
                  settings={settings}
                  imgName={brandImg}
                  path={brandPath}
                />
              </div>
            </div>
          </section>
          <Testimonial/>

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
        <Footer />
      </>
    );
  }
}

export default Home;
