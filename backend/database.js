const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

mongoose
  .connect("mongodb://localhost/creators-hub")
  .then(() => console.log("connected to the database!"))
  .catch((err) => console.log(err));

const CreatorSchema = new mongoose.Schema({
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
  },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  country: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  name: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  age: Number,
  title: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  profileImg: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  price: Number,
  tags: {
    type: [String],
    minlength: 5,
    maxlength: 255,
  },
  platforms: [
    {
      name: String,
      link: String,
    },
  ],
  accessToken: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  joined: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  contactLink: {
    type: String,
    minlength: 5,
    maxlenght: 500,
  },
  title: {
    type: String,
    minlength: 5,
    maxlenght: 200,
  },
  description: {
    type: String,
    minlength: 5,
    maxlenght: 1000,
  },
  profileComplete: {
    type: Boolean,
    default: false,
  },
});
CreatorSchema.methods.genToken = function () {
  const jwtKey = "sexy";
  return jwt.sign({ id: this._id, role: "creator" }, jwtKey);
};

const Creator = mongoose.model("creators", CreatorSchema);

const brandSchema = new mongoose.Schema({
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
  },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  country: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  name: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  contactLink: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  accessToken: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  joined: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  profileImg: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  description: {
    type: String,
    minlength: 5,
    maxlenght: 1000,
  },
});

brandSchema.methods.genToken = function () {
  const jwtKey = "sexy";
  return jwt.sign({ id: this._id, role: "brand" }, jwtKey);
};

const Brand = mongoose.model("brands", brandSchema);

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

module.exports.Creator = Creator;
module.exports.Brand = Brand;
