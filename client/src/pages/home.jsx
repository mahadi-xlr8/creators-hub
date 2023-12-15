import React, { Component } from "react";
import NevBar from "../components/nevBar";
import Footer from "./footer";
import PartnerSlider from "../components/home-component/partnerSlider";
import Testimonial from "../components/home-component/testimonials";
import HomeBanner from "../components/home-component/heroBanner";
import CreatorTestimonial from "../components/home-component/creatorTestimonial";
import LearnMore from "../components/home-component/lernMore";
import axios from "axios";
class Home extends React.Component {
  state = {};
  constructor() {
    super();

    axios
      .get("/review?role=brand")
      .then((res) => {
        const data = res.data;
        const newData = data.map((e) => {
          return {
            class: "testimonial",
            desktop: "testimonial desktop fade-in",
            name: e.name,
            joined: e.date,
            message: e.message,
            img: e.img,
            stars: e.rating,
          };
        });
        this.setState({ brandTestimonial: newData });
      })
      .catch((err) => console.log(err.message));

    axios
      .get("/review?role=creator")
      .then((res) => {
        const data = res.data;
        const newData = data.map((e) => {
          return {
            name: e.name,
            message: e.message,
            imgUrl: e.img,
            profileLink: e.profile,
          };
        });
        this.setState({ creatorTestimonial: newData });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
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
        <NevBar userType="" profilePage={false} />

        {/* <NavBarLogin/> */}

        <div id="crco-sidebar-overlay"></div>
        <main class="home-wrapper">
          <HomeBanner />

          <PartnerSlider imgUrl={brandImgUrl} text={"Brands & Partners"} />
          {this.state.brandTestimonial ? (
            <Testimonial
              heading={"Brands love us"}
              text={
                "The leading Influencer marketing platform for challenger brands and micro influencers"
              }
              data={this.state.brandTestimonial}
              background={"./images/hero-images/brand-testimonial-bg.svg"}
            />
          ) : null}
          {this.state.creatorTestimonial && (
            <CreatorTestimonial data={this.state.creatorTestimonial} />
          )}

          <LearnMore />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
