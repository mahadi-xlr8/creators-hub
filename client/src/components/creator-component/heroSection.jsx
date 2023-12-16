const CreatorHeroSection = (props) => {
  return (
    <section class="hero-banner creators">
      <div class="inner">
        <div class="text-group">
          <h1>
            The <span class="blue-text">leading</span> platform for aspiring
            Influencers &amp; Creators
          </h1>
          <p class="subtitle">
            Collab with amazing brands, grow your channels, and earn more money.
          </p>
          <a href="/brand/signup" class="link-btn primary">
            Collab
          </a>
        </div>
        <div class="hero-img-wrapper creators">
          <img
            class="circle"
            src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/hero-circle.svg"
            alt=""
          />
          <img
            class="frame"
            src="./images/hero-images/creator-hero-img-bg.svg"
            alt=""
          />
          <div class="fade-cycle creators">
            <img
              class="hero-img"
              src="/images/creators/hero/mehazabien.jpeg"
              alt=""
            />
            <img
              class="hero-img"
              src="/images/creators/hero/salman.jpeg"
              alt=""
            />
            <img
              class="hero-img"
              src="/images/creators/hero/tisha.jpeg"
              alt=""
            />
            <img
              class="hero-img"
              src="/images/creators/hero/tahsan.jpeg"
              alt=""
            />
          </div>
          <img
            class="shape quote"
            src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/hero-quote.svg"
            alt=""
          />
          <img
            class="shape arrow"
            src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/hero-arrow.svg"
            alt=""
          />
          <img
            class="shape graph"
            src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/creators/hero-graph.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CreatorHeroSection;
