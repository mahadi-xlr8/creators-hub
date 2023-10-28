const express = require("express");
const app = express.Router();
const { Creator } = require("../../database");
const calculateAge = require("../../helper/calculateAge");
const getCountry = require("../../helper/getCountry");
const getToday = require("../../helper/getToday");
const axios = require("axios");

app.post("/signup", async (req, res) => {
  const age = calculateAge(req.body.birthday);
  const country = getCountry(req.body.location);
  const today = getToday();
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
    email: req.body.email,
    profileImg: imageLink,
    profileComplete: false,
    joined: today,
    contactLink: req.body.profileLink,
    platforms: [
      { name: "Facebook", link: req.body.profileLink },
      { name: "Youtube", link: "" },
      { name: "Instagram", link: "" },
    ],
    gender: req.body.gender,
  });

  try {
    await creator.save();

    res
      .header("x-access-token", creator.genToken())
      .status(200)
      .send("Logged in successfully!");
  } catch (err) {
    res.status(400).send("Email already exist! Please Login.");
  }
});

app.post("/login", async (req, res) => {
  const appId = "311104531407144";
  const appSecret = process.env.facebookAppSecret;
  const longAccessData = await axios.get(
    `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${req.body.accessToken}`
  );
  const longAccessToken = longAccessData.data.access_token;
  const imageLink = `https://graph.facebook.com/me/picture?type=large&access_token=${longAccessToken}`;
  try {
    const exist = await Creator.findOne({ email: req.body.email });
    exist.accessToken = longAccessToken;
    exist.profileImg = imageLink;
    await exist.save();
    res
      .header("x-access-token", exist.genToken())
      .status(200)
      .send("Logged in successfully!");
  } catch (err) {
    const age = calculateAge(req.body.birthday);
    const country = getCountry(req.body.location);
    const today = getToday();

    const creator = new Creator({
      name: req.body.name,
      age,
      country,
      accessToken: longAccessToken,
      email: req.body.email,
      profileImg: imageLink,
      profileComplete: false,
      joined: today,
      contactLink: req.body.profileLink,
      platforms: [
        { name: "Facebook", link: req.body.profileLink },
        { name: "Youtube", link: "" },
        { name: "Instagram", link: "" },
      ],
      gender: req.body.gender,
    });

    try {
      await creator.save();

      res
        .header("x-access-token", creator.genToken())
        .status(200)
        .send("Logged in successfully!");
    } catch (err) {
      res.status(400).send("Email already exist! Please Login.");
    }
  }
});

module.exports = app;
