const express = require("express");
const jwtTokenGen = require("../../helper/encryptData");
const app = express.Router();
const { Creator } = require("../../database");
const calculateAge = require("../../helper/calculateAge");
const getCountry = require("../../helper/getCountry");
const axios = require("axios");
app.post("/new", async (req, res) => {
  const age = calculateAge(req.body.birthday);
  const country = getCountry(req.body.location);
  const appId = process.env.facebookAppId;
  const appSecret = process.env.facebookAppSecret;
  const longAccessData = await axios.get(
    `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${req.body.accessToken}`
  );
  const longAccessToken = longAccessData.data.access_token;

  const imageLink=`https://graph.facebook.com/me/picture?type=album&access_token=${longAccessToken}`
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
    email:req.body.email,
    profileImg:imageLink,
    profileComplete:false,
  });

  try{
    await creator.save();
    const jwtToken = creator.genToken();
    console.log("jwt token: ", jwtToken);
  }
  catch(err){
    res.send("Email already exist!").status(400)
  }
  
  res.send("hello").status(200);
});

app.get()



module.exports = app;
