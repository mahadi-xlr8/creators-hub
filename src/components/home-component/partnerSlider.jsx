import Slider from "react-slick";
const PartnerSlider = (props) => {
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
    <section class="logo-scroller">
      <h3>{props.text}</h3>
      <div id="brand-partners-slider">
        <div class="logos greyscale slick-sliders">
          <Slider {...settings} arrows={false} className="my-sliders">
            {props.imgUrl.map((e) => {
              return (
                <div class="item">
                  <img src={e} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;
