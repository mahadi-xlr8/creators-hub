import React, { Component } from "react";
import NevBar from "../components/nevBar";
import Footer from "./footer";
import PartnerSlider from "../components/home-component/partnerSlider";
import Testimonial from "../components/home-component/testimonials";
import HomeBanner from "../components/home-component/heroBanner";
import CreatorTestimonial from "../components/home-component/creatorTestimonial";
import LearnMore from "../components/home-component/lernMore";
class Home extends React.Component {
  render() {
    const creatorTestimonialData = [
      {
        name: "Mahadi",
        profileLink: "https://facebook.com",
        message: "A great website i must say",
        imgUrl: "./images/all/pages/creators/tiffany.jpg",
      },
      {
        name: "Pranto",
        profileLink: "https://facebook.com",
        message: "A great website i must say",
        imgUrl: "./images/all/pages/creators/tiffany.jpg",
      },
      {
        name: "Arman",
        profileLink: "https://facebook.com",
        message: "A great website i must say",
        imgUrl: "./images/all/pages/creators/tiffany.jpg",
      },
      {
        name: "Faisal",
        profileLink: "https://facebook.com",
        message: "A great website i must say",
        imgUrl: "./images/all/pages/creators/tiffany.jpg",
      },
    ];
    const brandPath = "";
    const brandImgUrl = [
      "./images/logos/partners/blanka.png",
      "./images/logos/partners/colgate.png",
      "./images/logos/partners/veritree.png",
      "./images/logos/partners/walmart.png",
      "./images/logos/partners/later.png",
      "./images/logos/partners/think.png",
      "./images/logos/partners/hootsuite.png",
      "./images/logos/partners/hex.png",
      "./images/logos/partners/vista.png",
      "./images/logos/partners/scentuals.png",
    ];

    return (
      <>
        <NevBar userType="" login={true} name={"Mehazabien"} />

        {/* <NavBarLogin/> */}

        <div id="crco-sidebar-overlay"></div>
        <main class="home-wrapper">
          <HomeBanner />

          <PartnerSlider imgUrl={brandImgUrl} />
          <Testimonial />

          <CreatorTestimonial data={creatorTestimonialData} />

          <LearnMore />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
