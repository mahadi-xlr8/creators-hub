import React, { Component } from "react";
import Slider from "react-slick";
import "./temp.css";

class Playground extends React.Component {
  render() {
    const baseUrl = "../images/creators/mehazabien/";
    const imgUrl = [
      "../images/creators/mehazabien/img1.jpg",
      "../images/creators/mehazabien/img1.jpg",
    ];
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img src={`${baseUrl}/img${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className='playground'>
        <Slider {...settings}>
          <div>
            <img src={`${baseUrl}/img1.jpg`} alt="" />
          </div>
          <div>
            <img src={`${baseUrl}/img2.jpg`} alt="" />
          </div>
          <div>
            <img src={`${baseUrl}/img3.jpg`} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Playground;
