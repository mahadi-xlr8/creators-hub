import Slider from "react-slick";
const CreatorPageTestimonial = (props) => {
  const creatorSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
  };

  return (
    <section class="testimonials-wrapper creator">
      <div class="background">
        <img src="./images/all/pages/home/creator-testimonial-bg.svg" alt="" />
      </div>
      <div class="inner">
        <div id="creator-testimonials-slider" class="testimonials-slider">
          <Slider {...creatorSlider} className="creator-slider">
            {props.data.map((e) => {
              return (
                <div class="testimonial">
                  <div class="testimonial-inner">
                    <img
                      class="creator-pic"
                      src={e.imgUrl}
                    />
                    <a
                      target="_blank"
                      rel="noopenner noreferrer"
                      href={e.profileLink}
                      class="creator-name"
                    >
                      @{e.name}
                    </a>
                    <p class="message">
                      “{e.message}”
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CreatorPageTestimonial;
