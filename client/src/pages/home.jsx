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
        name: "Imran Pranto",
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

    return (
      <>
        <NevBar userType="" role="creator" login={true} name={"Google"} profileComplete={false}/>

        {/* <NavBarLogin/> */}

        <div id="crco-sidebar-overlay"></div>
        <main class="home-wrapper">
          <HomeBanner />

          <PartnerSlider imgUrl={brandImgUrl} text={"Brands & Partners"} />
          <Testimonial
            heading={"Brands love us"}
            text={
              "The leading Influencer marketing platform for challenger brands and micro influencers"
            }
            data={testimonialData}
            background={"./images/hero-images/brand-testimonial-bg.svg"}
          />

          <CreatorTestimonial data={creatorTestimonialData} />

          <LearnMore />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
