import Fade from "react-reveal/Fade";

const HomeBanner = () => {
  return (
    <section class="hero-banner">
      <div
        class="background"
        style={{
          backgroundImage: "url(images/hero-images/background.svg)",
        }}
      ></div>
      <div class="inner">
        <div class="image-group mobile-visible">
          <Fade left>
            <div class="image-wrapper mobile-visible top-left">
              <img src="images/hero-images/graphic1.png" alt="" />
            </div>
          </Fade>
          <Fade left>
            <div class="image-wrapper bottom-left">
              <img src="images/hero-images/graphic2.png" alt="" />
            </div>
          </Fade>
        </div>

        <div class="text-group">
          <Fade top>
          <h1>
            Where brands and creators connect, collaborate, grow, & earn more
            money
          </h1>
          </Fade>
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
          <Fade right>
            <div class="image-wrapper top-right">
              <img src="images/hero-images/graphic3.png" alt="" />
            </div>
          </Fade>
          <Fade right>
            <div class="image-wrapper bottom-right">
              <img src="images/hero-images/graphic4.png" alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
