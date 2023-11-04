const express = require("express");
const jwtChecker = require("../middleware/jwtChecker");

const { Creator, Brand } = require("../database");
const validateFacebookAccessToken = require("../helper/validateFacebookAccessToken");

const app = express.Router();

app.get("/", jwtChecker, async (req, res) => {
  if (req.user.role == "creator") {
    try {
      const data = await Creator.findOne({ _id: req.user.id });
      const newData = {
        role: "creator",
        login: true,
        id: data._id,
        name: data.name,
        profileImg: data.profileImg,
      };
      const accessToken = data.accessToken;
      if (accessToken) {
        const isValid = await validateFacebookAccessToken(accessToken);
        if (isValid) res.status(200).json(newData);
        else res.status(401).send("Access Token Expired");
      } else res.status(200).json(newData);
    } catch (err) {
      res.status(400).send("Invalid id!");
    }
  } else {
    try {
      const data = await Brand.findOne({ _id: req.user.id });
      const newData = {
        role: "brand",
        login: true,
        id: data._id,
        name: data.name,
        profileImg: data.profileImg,
      };
      const accessToken = data.accessToken;
      delete newData.accessToken;
      if (accessToken) {
        const isValid = await validateFacebookAccessToken(accessToken);
        if (isValid) res.status(200).json(newData);
        else res.status(401).send("Access Token Expired");
      } else res.status(200).json(newData);
    } catch (err) {
      res.status(400).send("Invalid id!");
    }
  }
});

module.exports = app;
