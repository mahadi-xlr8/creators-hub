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
  contactLink: {
    type: String,
    minlength: 5,
    maxlenght: 1000,
  },
});
CreatorSchema.methods.genToken = function () {
  const jwtKey = "sexy";
  return jwt.sign({ id: this._id, role: "creator" }, jwtKey);
};

const Creator = mongoose.model("creators", CreatorSchema);

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

async function getData() {
  const res = await Creator.find().select({ name: 1, _id: 0 });
  return res;
}

module.exports.getName = getData;
module.exports.Creator = Creator;
