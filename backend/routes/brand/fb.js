const express = require("express");
const calculateAge = require("../../helper/calculateAge");
const getCountry = require("../../helper/getCountry");
const getToday = require("../../helper/getToday");
const app = express.Router();
const axios = require("axios");
const { Brand } = require("../../database");

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
  const brand = new Brand({
    name: req.body.name,
    age,
    country,
    accessToken: longAccessToken,
    email: req.body.email,
    profileImg: imageLink,
    profileComplete: false,
    joined: today,
    contactLink: req.body.profileLink,
  });

  try {
    await brand.save();

    res
      .header("x-access-token", brand.genToken())
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

  try {
    const exist = await Brand.findOne({ email: req.body.email });
    console.log("exist value ",exist)
    exist.accessToken = longAccessToken;
    await exist.save();
    res
      .header("x-access-token", exist.genToken())
      .status(200)
      .send("Logged in successfully!");
  } catch (err) {
    console.log("error message ",err.message)
    const age = calculateAge(req.body.birthday);
    const country = getCountry(req.body.location);
    const today = getToday();

    const imageLink = `https://graph.facebook.com/me/picture?type=large&access_token=${longAccessToken}`;
    const brand = new Brand({
      name: req.body.name,
      age,
      country,
      accessToken: longAccessToken,
      email: req.body.email,
      profileImg: imageLink,
      profileComplete: false,
      joined: today,
      contactLink: req.body.profileLink,
    });

    try {
      await brand.save();

      res
        .header("x-access-token", brand.genToken())
        .status(200)
        .send("Logged in successfully!");
    } catch (err) {
      res.status(400).send("Email already exist! Please Login.");
    }
  }
});

module.exports = app;
