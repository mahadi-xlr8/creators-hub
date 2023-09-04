const LearnMore = (props) => {
  return (
    <section class="learn-more fade-in">
      <div class="background">
        <img src="./images/all/pages/home/curve-bg.svg" alt="" />
      </div>
      <img class="hashtag" src="./images/all/pages/home/hashtag.svg" alt="" />
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
  );
};

export default LearnMore;
