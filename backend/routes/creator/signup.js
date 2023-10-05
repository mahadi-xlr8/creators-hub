const express = require("express");
const bcrypt = require("bcrypt");
const app = express.Router();
const dataCheck = require("../../middleware/signupDataCheck");
const { Creator } = require("../../database");
const getToday = require("../../helper/getToday");
app.post("/", dataCheck, async (req, res) => {
  

  const creator = new Creator({
    name: req.body.name,
    email: req.body.email,
    profileImg: req.body.profile_photo,
    password: req.body.password,
    joined: getToday(),
  });
  try {
    await creator.save();
    res
      .header("x-access-token", creator.genToken())
      .status(200)
      .send("Account created successfully!");
  } catch (err) {
    res.status(400).send("Email already exist!");
  }
});

module.exports = app;
