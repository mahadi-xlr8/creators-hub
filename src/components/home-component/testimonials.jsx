import ReviewSite from "./review-site";
import InnerTestimonial from "./inner-testimonial";
import Slider from "react-slick";
// import Slider from "@farbenmeer/react-spring-slider"
const Testimonial = (props) => {
  const reviewSiteImg = [
    { img: "google.svg", name: "Google", ratting: 5 },
    { img: "g2.svg", name: "G2", ratting: 4.2 },
    { img: "trustpilot.svg", name: "Trush Pilot", ratting: 4.5 },
  ];

  const testimonialData = [
    {
      class: "testimonial",
      desktop: "testimonial desktop fade-in",
      name: "Faisal Khan",
      joined: "Jan 12, 2021",
      message: "khub joss ekta website.",
      stars: 5,
      platformImg: "./images/all/icons/trustpilot.svg",
    },
    {
      class: "testimonial",
      desktop: "testimonial desktop fade-in",
      name: "Abir Mia",
      joined: "Fab 10, 2022",
      message: "khub joss ekta website.",
      stars: 4,
      platformImg: "./images/all/icons/google.svg",
    },
    {
      class: "testimonial",
      desktop: "testimonial desktop fade-in",
      name: "Abir Mia",
      joined: "Fab 10, 2022",
      message: "khub joss ekta website.",
      stars: 4,
      platformImg: "./images/all/icons/google.svg",
    },
    {
      class: "testimonial",
      desktop: "testimonial desktop fade-in",
      name: "Abir Mia",
      joined: "Fab 10, 2022",
      message: "khub joss ekta website.",
      stars: 4,
      platformImg: "./images/all/icons/google.svg",
    },
    {
      class: "testimonial",
      desktop: "testimonial desktop fade-in",
      name: "Abir Mia",
      joined: "Fab 10, 2022",
      message: "khub joss ekta website.",
      stars: 4,
      platformImg: "./images/all/icons/google.svg",
    },
    {
      class: "testimonial",
      desktop: "testimonial desktop fade-in",
      name: "Abir Mia",
      joined: "Fab 10, 2022",
      message: "khub joss ekta website.",
      stars: 4,
      platformImg: "./images/all/icons/google.svg",
    },
    {
      class: "testimonial",
      desktop: "testimonial desktop fade-in",
      name: "Abir Mia",
      joined: "Fab 10, 2022",
      message: "khub joss ekta website.",
      stars: 4,
      platformImg: "./images/all/icons/google.svg",
    },
  ];

  const reviewSiteImgPath = "./images/all/icons/";

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
        <img src="./images/hero-images/brand-testimonial-bg.svg" alt="" />
      </div>
      <div class="inner">
        <div class="intro-section">
          <h2>Brands love us</h2>
          <p class="subtitle">
            The leading Influencer marketing platform for challenger brands and
            micro influencers
          </p>
          <ReviewSite path={reviewSiteImgPath} img={reviewSiteImg} />

          <InnerTestimonial
            data={{
              class: "testimonial desktop fade-in",
              name: "Imran Pranto",
              joined: "Oct 12, 2022",
              message: "dhur ami eikhane ki kori!!",
              stars: 5,
              platformImg: "./images/all/icons/trustpilot.svg",
            }}
          />
        </div>

        <div id="brand-testimonials-slider-one" class="testimonials-slider">
          <Slider {...creatorSliderSetting}>
            {testimonialData.map((e) => {
              return <InnerTestimonial data={e} />;
            })}
          </Slider>
        </div>

        <div class="desktop-testimonials">
          <InnerTestimonial data={testimonialData[0]} desktop={true} />
          <InnerTestimonial data={testimonialData[1]} desktop={true} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
