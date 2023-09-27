const express = require("express");
const jwtTokenGen = require("../../helper/encryptData");
const app = express.Router();
const { Creator } = require("../../database");
const axios = require("axios");
const calculateAge = require("../../helper/calculateAge");
const getCountry = require("../../helper/getCountry");
const getToady = require("../../helper/getToday");
app.post("/new", async (req, res) => {
  const age = calculateAge(req.body.birthday);
  const country = getCountry(req.body.location);
  const today = getToady();
  const appId = "311104531407144";
  const appSecret = process.env.facebookAppSecret;
  const longAccessData = await axios.get(
    `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${req.body.accessToken}`
  );
  const longAccessToken = longAccessData.data.access_token;

  const imageLink = `https://graph.facebook.com/me/picture?type=large&access_token=${longAccessToken}`;
  const creator = new Creator({
    name: req.body.name,
    age,
    country,
    accessToken: longAccessToken,
    platforms: [
      {
        name: "Facebook",
        link: req.body.profileLink,
      },
    ],
    email: req.body.email,
    profileImg: imageLink,
    profileComplete: false,
    joined: today,
    contactLink: req.body.profileLink,
  });

  try {
    await creator.save();

    res
      .header("x-access-token", creator.genToken())
      .status(200)
      .send("Logged in successfully!");
  } catch (err) {
    console.log(err.message);
    res.status(400).send("Email already exist here");
  }
});

module.exports = app;
