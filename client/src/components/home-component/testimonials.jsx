import ReviewSite from "./review-site";
import InnerTestimonial from "./inner-testimonial";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

// import Slider from "@farbenmeer/react-spring-slider"
const Testimonial = (props) => {
  const reviewSiteImg = [
    { img: "./images/all/icons/google.svg", name: "Google", ratting: 5 },
    { img: "./images/all/icons/g2.svg", name: "G2", ratting: 4.2 },
    {
      img: "./images/all/icons/trustpilot.svg",
      name: "Trush Pilot",
      ratting: 4.5,
    },
  ];

  const creatorSliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section class="testimonials-wrapper brand">
      <div class="background">
        <img src={props.background} alt="" />
      </div>
      <div class="inner">
        <div class="intro-section">
          <h2>{props.heading}</h2>
          <p class="subtitle">{props.text}</p>
          <ReviewSite img={reviewSiteImg} />

          <Fade top>
            <InnerTestimonial data={props.data[0]} desktop={true}/>
          </Fade>
        </div>

        <div id="brand-testimonials-slider-one" class="testimonials-slider">
          <Slider {...creatorSliderSetting}>
            {props.data.map((e) => {
              return <InnerTestimonial data={e} />;
            })}
          </Slider>
        </div>

        <div class="desktop-testimonials">
          <Fade top>
          <InnerTestimonial
            data={props.data[Math.max(props.data.length - 1, 0)]}
            desktop={true}
          />
          </Fade>
          <Fade top>
          <InnerTestimonial
            data={props.data[Math.max(props.data.length - 2, 0)]}
            desktop={true}
          />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
