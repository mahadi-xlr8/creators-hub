const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/creators-hub")
  .then(() => console.log("connected to the database!"))
  .catch((err) => console.log(err));

const Creator = mongoose.model(
  "creators",
  new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    title: String,
    profileImg: String,
    followers: String,
    audiance: { low: Number, high: Number },
    engagement: Number,
    price: Number,
    promoVideo: { platformName: String, iconSrc: String, videoLink: String },
    images: [String],
    tags: [String],
    platforms: [String],
    contactLink: String,
  })
);

const Brand = mongoose.model(
  "brands",
  new mongoose.Schema({
    name: String,
    logo: String,
  })
);

const Collaboration = mongoose.model(
  "collaboration",
  new mongoose.Schema({
    creator: {
      name: String,
      id: String,
    },
    brand: {
      name: String,
      id: String,
      comment: String,
    },
    post: {
      platform: String,
      link: String,
      reach: Number,
    },
    paid: {
      amount: Number,
      currency: String,
    },
    platfomrs: [String],
  })
);

async function addCreator() {
  const creator = new Creator({
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
  });
  const res = await creator.save();
  console.log(res);
}

async function addBrand() {
  const brand = new Brand({
    name: "Colgate",
    logo: "/images/logos/partners/colgate.png",
  });
  const res=await brand.save()
  console.log(res)
}


async function getData() {
  const res = await Creator.find().select({ name: 1, _id: 0 });
  return res;
}

module.exports.getName = getData;
