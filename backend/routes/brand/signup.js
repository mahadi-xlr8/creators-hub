const express = require("express");
const bcrypt = require("bcrypt");
const signupDataCheck = require("../../middleware/signupDataCheck");
const app = express.Router();
const { Brand } = require("../../database");
const getToday = require("../../helper/getToday");
app.post("/", signupDataCheck, async (req, res) => {
  const brand = new Brand({
    name: req.body.name,
    email: req.body.email,
    profileImg: req.body.profile_photo,
    password: req.body.password,
    joined: getToday(),
    contactLink: req.body.website,
  });

  try {
    await brand.save();
    res
      .header("x-access-token", brand.genToken())
      .status(200)
      .send("Account created successfully!");
  } catch (err) {
    res.status(400).send("Email already exist!");
  }
});

module.exports = app;
