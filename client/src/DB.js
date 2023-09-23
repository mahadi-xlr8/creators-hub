const Data = {
  creators: [
    {
      id: 1,
      name: "Salman Muqtadir",
      title: "promote your product with Salman",
      profileImg: "images/creators/profile/salman.jpeg",
      followers: "1M",
      audience: { low: 15, high: 30 },
      engagement: 1.5,
      price: 10000,
      promoVideo: {
        platformName: "Youtube",
        iconSrc: "/images/creators/icons/youtube.png",
        videoLink: "https://youtube.com",
      },
      images: [
        "/images/creators/mehazabien/img1.jpg",
        "/images/creators/mehazabien/img2.jpg",
        "/images/creators/mehazabien/img3.jpg",
      ],
      tags: ["Actress", "Social Media Influencer", "Beauty"],
      platforms: ["Youtube", "Facebook", "Instagram"],
      contactLink: "https://www.facebook.com/messages/t/191936460846328",
    },
    {
      id: 2,
      name: "Mehazabien Chowdhury",
      age: 28,
      title: "Boost your seles with Mehazabien Chowdhury",
      profileImg: "images/creators/profile/mehazabien.jpeg",
      followers: "10M",
      audience: { low: 10, high: 60 },
      engagement: 1.7,
      price: 100000 / 1000,
      promoVideo: {
        platformName: "Facebook",
        iconSrc: "/images/creators/icons/facebook.png",
        videoLink: "https://facebook.com",
      },
      images: [
        "images/creators/mehazabien/img1.jpg",
        "images/creators/mehazabien/img2.jpg",
        "images/creators/mehazabien/img3.jpg",
      ],
      tags: ["Actress", "Social Media Influencer", "Beauty"],
      platforms: ["Youtube", "Facebook", "Instagram"],
      contactLink: "https://www.facebook.com/messages/t/191936460846328",
    },
  ],
  brands: [
    {
      id: 1,
      name: "Colgate",
      logo: "/images/logos/partners/colgate.png",
    },
  ],
  collaborations: {
    "Mehazabien Chowdhury": [
      {
        brandName: "Colgate",
        rating: 4.5,
        collaborationLinks: { Facebook: "#", Instagram: "#" },
        brandMessage: "you should work more harder.",
        productImg: "/images/logos/partners/colgate.png",

        productName: "toothpaste",
        reach:'0.9%',
        paid:'2000 BDT',
        platforms:['Facebook','Instagram']
      },
    ],
  },
};
export function getCreators() {
  return Data.creators;
}
export function getPreviousWorksByName(name) {
  return Data.collaborations[name];
}
export function getBrandsByName(name) {
  return Data.brands.filter((e) => e.name === name)[0];
}
export function getCreatorsByName(name) {
  return Data.creators.filter((e) => e.name === name);
}
